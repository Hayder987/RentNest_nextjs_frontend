"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { CategoryItem } from "@/lib/category-management.type";
import UpdateCategoryDialog from "./UpdateCategoryDialog";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

interface CategoryTableProps {
  categories: CategoryItem[];
}

export default function CategoryTable({ categories }: CategoryTableProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(
    null,
  );

  const [updateOpen, setUpdateOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>

              <TableHead>Properties</TableHead>

              <TableHead>Created</TableHead>

              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.name}</TableCell>

                <TableCell>{category._count.properties}</TableCell>

                <TableCell>
                  {new Date(category.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => {
                        setSelectedCategory(category);
                        setUpdateOpen(true);
                      }}
                    >
                      <Pencil className="size-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => {
                        setSelectedCategory(category);
                        setDeleteOpen(true);
                      }}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedCategory && (
        <>
          <UpdateCategoryDialog
            open={updateOpen}
            onOpenChange={setUpdateOpen}
            category={selectedCategory}
          />

          <DeleteCategoryDialog
            open={deleteOpen}
            onOpenChange={setDeleteOpen}
            category={selectedCategory}
          />
        </>
      )}
    </>
  );
}
