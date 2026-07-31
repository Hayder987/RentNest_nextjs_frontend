"use client";

import { useState } from "react";

import { PaymentHistoryResponse } from "@/lib/payment.type";

import PaymentHistoryTable from "./PaymentHistoryTable";
import ReviewDialog from "./ReviewDialog";

interface PaymentHistoryClientProps {
  payments: PaymentHistoryResponse;
}

export default function PaymentHistoryClient({
  payments,
}: PaymentHistoryClientProps) {
  const [open, setOpen] = useState(false);

  const [selectedRentalId, setSelectedRentalId] =
    useState("");

  const handleReview = (rentalRequestId: string) => {
    setSelectedRentalId(rentalRequestId);
    setOpen(true);
  };

  return (
    <>
      <PaymentHistoryTable
        payments={payments}
        onReview={handleReview}
      />

      <ReviewDialog
        open={open}
        onOpenChange={setOpen}
        rentalRequestId={selectedRentalId}
      />
    </>
  );
}