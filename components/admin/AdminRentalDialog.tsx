"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  RentalDetailsById,
  RentalDetailsResponseById,
} from "@/lib/rental.type";
import { getRentalByIdAction } from "@/app/(dashboardGroup)/_actions/TenantActions/getRentalByIdAction";
import { RentalStatusBadge } from "@/utils/getStatusBadge";

interface Props {
  rentalId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AdminRentalDialog({
  rentalId,
  open,
  onOpenChange,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [rental, setRental] = useState<RentalDetailsById | null>(null);

  useEffect(() => {
    if (!open || !rentalId) return;

    const loadRental = async () => {
      setLoading(true);

      try {
        const result: RentalDetailsResponseById =
          await getRentalByIdAction(rentalId);

        if (result.success) {
          setRental(result.data);
        }
      } finally {
        setLoading(false);
      }
    };

    loadRental();
  }, [open, rentalId]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Rental Details</DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="py-10 text-center">Loading...</div>
        ) : !rental ? (
          <div className="py-10 text-center">Rental not found.</div>
        ) : (
          <div className="space-y-6">
            <Image
              src={rental.property.image}
              alt={rental.property.title}
              width={900}
              height={500}
              className="h-72 w-full rounded-lg object-cover"
            />

            <div>
              <h2 className="text-2xl font-bold">{rental.property.title}</h2>

              <p className="text-muted-foreground mt-2">
                {rental.property.description}
              </p>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold">Tenant</h3>

                <p>{rental.tenant.name}</p>

                <p className="text-muted-foreground text-sm">
                  {rental.tenant.email}
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Landlord</h3>

                <p>{rental.property.landlord.name}</p>

                <p className="text-muted-foreground text-sm">
                  {rental.property.landlord.email}
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Rental</h3>

                {RentalStatusBadge({ status: rental.status })}

                <p className="mt-2 text-sm">
                  Created :{" "}
                  {new Date(rental.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Payment</h3>

                {rental.payment ? (
                  <>
                    <Badge>{rental.payment.status}</Badge>

                    <p className="mt-2">৳{rental.payment.amount}</p>

                    <p className="text-muted-foreground text-sm">
                      {rental.payment.transactionId}
                    </p>

                    <p className="text-muted-foreground text-sm">
                      {new Date(rental.payment.paidAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </>
                ) : (
                  <Badge variant="secondary">Unpaid</Badge>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 font-semibold">Reviews</h3>

              {rental.property.reviews.length === 0 ? (
                <p className="text-muted-foreground">No review submitted.</p>
              ) : (
                rental.property.reviews.map((review) => (
                  <div key={review.id} className="rounded-lg border p-4">
                    <p>⭐ {review.rating}/5</p>

                    <p className="mt-2">{review.comment}</p>

                    <p className="text-muted-foreground mt-2 text-xs">
                        {new Date(review.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
