import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentSuccessProps {
  rentalId?: string;
}

export default function PaymentSuccess({
  rentalId,
}: PaymentSuccessProps) {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardContent className="flex flex-col items-center py-14 text-center">
        <div className="mb-6 rounded-full bg-green-100 p-4 text-green-600">
          <CheckCircle2 className="h-16 w-16" />
        </div>

        <h1 className="text-3xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-3 max-w-lg text-muted-foreground">
          Your payment has been completed successfully.
          Your rental request has been updated.
        </p>

        {rentalId && (
          <p className="mt-4 text-sm text-muted-foreground">
            Rental ID: {rentalId}
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/tenant-dashboard/my-rentals">
              My Rentals
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
          >
            <Link href="/properties">
              Browse Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}