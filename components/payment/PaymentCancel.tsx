import Link from "next/link";
import { CircleX, RotateCcw, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentCancelProps {
  session_id?: string;
}

export default function PaymentCancel({
  session_id,
}: PaymentCancelProps) {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardContent className="flex flex-col items-center py-14 text-center">
        {/* Icon */}

        <div className="mb-6 rounded-full bg-red-100 p-4 text-red-600">
          <CircleX className="h-16 w-16" />
        </div>

        {/* Title */}

        <h1 className="text-3xl font-bold">
          Payment Cancelled
        </h1>

        {/* Description */}

        <p className="mt-3 max-w-lg text-muted-foreground">
          Your payment was cancelled before completion.
          {"Don't"} worry — your rental request is still available
          if it {"hasn't"} expired or been changed.
        </p>

        {/* Rental ID */}

        {session_id && (
          <p className="mt-4 text-sm text-muted-foreground">
            Session ID: {session_id}
          </p>
        )}

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/tenant-dashboard/my-rentals">
              <RotateCcw className="mr-2 h-4 w-4" />
              Back to My Rentals
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
          >
            <Link href="/properties">
              <Home className="mr-2 h-4 w-4" />
              Browse Properties
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}