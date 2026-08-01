"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryItem } from "@/lib/category-management.type";
import CategoryTable from "./CategoryTable";
import CreateCategoryDialog from "./CreateCategoryDialog";

interface Props {
  categories: CategoryItem[];
}

export default function CategoryManagement({ categories }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Category Management</h2>

            <p className="text-muted-foreground">Manage all categories.</p>
          </div>

          <Button onClick={() => setOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        </div>

        <CategoryTable categories={categories} />
      </div>

      <CreateCategoryDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
