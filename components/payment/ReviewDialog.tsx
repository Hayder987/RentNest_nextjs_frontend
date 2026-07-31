"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReviewForm from "./ReviewForm";


interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rentalRequestId: string;
}

export default function ReviewDialog({
  open,
  onOpenChange,
  rentalRequestId,
}: ReviewDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Leave a Review
          </DialogTitle>

          <DialogDescription>
            Share your experience with this
            property after completing your
            rental.
          </DialogDescription>
        </DialogHeader>

        <ReviewForm
          rentalRequestId={rentalRequestId}
          onSuccess={() =>
            onOpenChange(false)
          }
        />
      </DialogContent>
    </Dialog>
  );
}