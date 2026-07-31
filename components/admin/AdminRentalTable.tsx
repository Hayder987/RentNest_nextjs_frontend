"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { AdminRental, AdminRentalMeta } from "@/lib/admin-rental.type";

import { RentalStatusBadge } from "@/utils/getStatusBadge";
import UserPagination from "./UserPagination";
import AdminRentalDialog from "./AdminRentalDialog";

interface Props {
  rentals: AdminRental[];
  meta: AdminRentalMeta;
}

export default function AdminRentalTable({ rentals, meta }: Props) {
  const [selectedId, setSelectedId] = useState("");

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>

              <TableHead>Tenant</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Payment</TableHead>

              <TableHead>Date</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rentals.map((rental) => (
              <TableRow key={rental.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={rental.property.image}
                      alt={rental.property.title}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />

                    <div>
                      <p className="font-medium">{rental.property.title}</p>

                      <p className="text-muted-foreground text-xs">
                        {rental.property.location}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <p>{rental.tenant.name}</p>

                  <p className="text-muted-foreground text-xs">
                    {rental.tenant.email}
                  </p>
                </TableCell>

                <TableCell>
                  {RentalStatusBadge({ status: rental.status })}
                </TableCell>

                <TableCell>
                  {rental.payment ? (
                    <Badge>Paid</Badge>
                  ) : (
                    <Badge variant="secondary">Unpaid</Badge>
                  )}
                </TableCell>

                <TableCell>
                  {new Date(rental.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>

                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedId(rental.id);
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

      <AdminRentalDialog
        rentalId={selectedId}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
