import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import { LandlordRentalRequest } from "@/lib/landlord.rentalRequest.type";
import { RentalStatusBadge } from "@/utils/getStatusBadge";
import RentalRequestActionsButton from "./RentalRequestActionsButton";


interface RentalRequestsTableProps {
  rentals: LandlordRentalRequest[];
}

export default function RentalRequestsTable({
  rentals,
}: RentalRequestsTableProps) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table className="min-w-262.5">
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>

              <TableHead>Property</TableHead>

              <TableHead>Category</TableHead>

              <TableHead>Location</TableHead>

              <TableHead className="text-right">
                Monthly Rent
              </TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Requested</TableHead>

              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rentals.map((rental) => (
              <TableRow key={rental.id}>
                {/* Tenant */}

                <TableCell>
                  <div className="space-y-1">
                    <p className="font-medium">
                      {rental.tenant.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {rental.tenant.email}
                    </p>
                  </div>
                </TableCell>

                {/* Property */}

                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={rental.property.image}
                      alt={rental.property.title}
                      width={70}
                      height={70}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-medium">
                        {rental.property.title}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        ID: {rental.property.id.slice(0, 8)}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Category */}

                <TableCell>
                  {rental.property.category.name}
                </TableCell>

                {/* Location */}

                <TableCell>
                  {rental.property.location}
                </TableCell>

                {/* Price */}

                <TableCell className="text-right font-semibold">
                  $
                  {rental.property.price.toLocaleString()}
                </TableCell>

                {/* Status */}

                <TableCell>
                  <RentalStatusBadge
                    status={rental.status}
                  />
                </TableCell>

                {/* Date */}

                <TableCell>
                  {new Date(
                    rental.createdAt
                  ).toLocaleDateString()}
                </TableCell>

                {/* Actions */}

                <TableCell className="text-right">
                  <RentalRequestActionsButton
                    rental={rental}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}