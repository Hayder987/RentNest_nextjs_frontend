"use client";

import Image from "next/image";
import { CreditCard, Receipt } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { PaymentHistoryResponse } from "@/lib/payment.type";
import { RentalStatusBadge } from "@/utils/getStatusBadge";

interface PaymentHistoryTableProps {
  payments: PaymentHistoryResponse;
  onReview: (rentalRequestId: string) => void;
}

export default function PaymentHistoryTable({
  payments,
  onReview,
}: PaymentHistoryTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>

            <TableHead>Category</TableHead>

            <TableHead>Amount</TableHead>

            <TableHead>Payment</TableHead>

            <TableHead>Rental</TableHead>

            <TableHead>Paid At</TableHead>

            <TableHead>Transaction</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {payments?.data.map((payment) => (
            <TableRow key={payment.id}>
              {/* Property */}

              <TableCell>
                <div className="flex min-w-62.5 items-center gap-3">
                  <Image
                    src={payment.rentalRequest.property.image}
                    alt={payment.rentalRequest.property.title}
                    width={70}
                    height={70}
                    className="rounded-lg object-cover"
                  />

                  <div>
                    <p className="font-medium">
                      {payment.rentalRequest.property.title}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {payment.rentalRequest.property.location}
                    </p>
                  </div>
                </div>
              </TableCell>

              {/* Category */}

              <TableCell>
                <Badge variant="outline">
                  {payment.rentalRequest.property.category.name}
                </Badge>
              </TableCell>

              {/* Amount */}

              <TableCell>
                <span className="font-semibold text-primary">
                  ${payment.amount.toLocaleString()}
                </span>
              </TableCell>

              {/* Payment Status */}

              <TableCell>
                <Badge className="gap-1">
                  <CreditCard className="h-3 w-3" />
                  {payment.status}
                </Badge>
              </TableCell>

              {/* Rental Status */}

              <TableCell>
                {RentalStatusBadge({
                  status: payment.rentalRequest?.status,
                })}
              </TableCell>

              {/* Paid */}

              <TableCell>
                {new Date(payment.paidAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </TableCell>

              {/* Transaction */}

              <TableCell>
                <div className="flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-primary" />

                  <span className="max-w-45 truncate text-sm">
                    {payment.transactionId}
                  </span>
                </div>
              </TableCell>

              {/* Action */}

              <TableCell className="text-right">
                {payment.rentalRequest.status === "COMPLETED" ? (
                  <Button
                    size="sm"
                    onClick={() => onReview(payment.rentalRequest.id)}
                  >
                    Give Review
                  </Button>
                ) : (
                  <span className="text-sm text-muted-foreground">—</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
