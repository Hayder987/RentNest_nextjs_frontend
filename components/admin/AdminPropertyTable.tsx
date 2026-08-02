"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  AdminProperty,
  AdminPropertyMeta,
} from "@/lib/admin-property.type";
import AdminPropertyDialog from "./AdminPropertyDialog";
import UserPagination from "./UserPagination";

interface AdminPropertyTableProps {
  properties: AdminProperty[];
  meta: AdminPropertyMeta;
}

export default function AdminPropertyTable({
  properties,
  meta,
}: AdminPropertyTableProps) {
  const [selectedId, setSelectedId] = useState("");

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Landlord</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rentals</TableHead>
              <TableHead>Reviews</TableHead>
              <TableHead className="text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />

                    <div>
                      <p className="font-medium">
                        {property.title}
                      </p>

                      <p className="text-muted-foreground text-sm">
                        {property.location}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  {property.category.name}
                </TableCell>

                <TableCell>
                  <div>
                    <p>{property.landlord.name}</p>

                    <p className="text-muted-foreground text-xs">
                      {property.landlord.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  ৳{property.price}
                </TableCell>

                <TableCell>
                  {property.available ? (
                    <Badge>Available</Badge>
                  ) : (
                    <Badge variant="secondary">
                      Rented
                    </Badge>
                  )}
                </TableCell>

                <TableCell>
                  {property._count.rentals}
                </TableCell>

                <TableCell>
                  {property._count.reviews}
                </TableCell>

                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedId(property.id);
                      setOpen(true);
                    }}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <UserPagination meta={meta} />

      <AdminPropertyDialog
        propertyId={selectedId}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}