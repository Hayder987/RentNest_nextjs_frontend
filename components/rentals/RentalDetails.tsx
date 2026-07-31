import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, BadgeCheck, Calendar, MapPin, User,} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RentalDetailsProps } from "@/lib/initial-state";
import { getStatusBadge } from "@/utils/getStatusBadge";


export default function RentalDetails({
  rental,
}: RentalDetailsProps) {

  return (
    <section className="mx-auto max-w-7xl space-y-8">

      {/* Back */}

      <Button
        asChild
        variant="outline"
      >
        <Link href="/tenant-dashboard/my-rentals">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to My Rentals
        </Link>
      </Button>

      {/* Hero */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Image */}

        <Card className="overflow-hidden p-0">

          <Image
            src={rental.property.image}
            alt={rental.property.title}
            width={800}
            height={600}
            className="h-87.5 w-full object-cover lg:h-full"
            priority
          />

        </Card>

        {/* Property */}

        <div className="space-y-6">

          <div className="flex flex-wrap items-center gap-3">

            <Badge>
              {rental.property.category.name}
            </Badge>

            {getStatusBadge({rental})}

          </div>

          <div>

            <h1 className="text-4xl font-bold">
              {rental.property.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-muted-foreground">

              <MapPin className="h-4 w-4 text-primary" />

              {rental.property.location}

            </div>

          </div>

          <Card className="flex items-center justify-between p-6">

            <div>

              <p className="text-sm text-muted-foreground">
                Monthly Rent
              </p>

              <h2 className="text-4xl font-bold text-primary">
                $
                {rental.property.price.toLocaleString()}
              </h2>

            </div>

            <Badge
              variant="outline"
              className="gap-1"
            >

              <BadgeCheck className="h-4 w-4" />

              Verified

            </Badge>

          </Card>

          {/* Description */}

          <Card className="space-y-4 p-6">

            <h2 className="text-xl font-semibold">
              Property Description
            </h2>

            <p className="leading-8 text-muted-foreground">

              {rental.property.description}

            </p>

          </Card>

        </div>

      </div>

      {/* Bottom */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Rental Information */}

        <Card className="space-y-5 p-6">

          <h2 className="text-xl font-semibold">
            Rental Information
          </h2>

          <div className="flex items-center justify-between">

            <span>Status</span>

            {getStatusBadge({rental})}

          </div>

          <div className="flex items-center justify-between">

            <span>Category</span>

            <span>
              {rental.property.category.name}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span>Availability</span>

            <Badge
              variant={
                rental.property.available
                  ? "default"
                  : "destructive"
              }
            >
              {rental.property.available
                ? "Available"
                : "Not Available"}
            </Badge>

          </div>

          <div className="flex items-center justify-between">

            <span>Requested On</span>

            <div className="flex items-center gap-2">

              <Calendar className="h-4 w-4 text-primary" />

              {new Date(
                rental.createdAt
              ).toLocaleDateString()}

            </div>

          </div>

          <div className="flex items-center justify-between">

            <span>Updated</span>

            <div className="flex items-center gap-2">

              <Calendar className="h-4 w-4 text-primary" />

              {new Date(
                rental.updatedAt
              ).toLocaleDateString()}

            </div>

          </div>

        </Card>

                {/* Tenant & Landlord */}

        <div className="space-y-8">

          {/* Tenant */}

          <Card className="space-y-5 p-6">

            <h2 className="text-xl font-semibold">
              Tenant Information
            </h2>

            <div className="flex items-center gap-3">

              <User className="h-5 w-5 text-primary" />

              <div>

                <p className="font-medium">
                  {rental.tenant.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {rental.tenant.email}
                </p>

              </div>

            </div>

          </Card>

          {/* Landlord */}

          <Card className="space-y-5 p-6">

            <h2 className="text-xl font-semibold">
              Landlord Information
            </h2>

            <div className="flex items-center gap-3">

              <User className="h-5 w-5 text-primary" />

              <div>

                <p className="font-medium">
                  {rental.property.landlord.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {rental.property.landlord.email}
                </p>

              </div>

            </div>

          </Card>

          {/* Payment */}

          <Card className="space-y-5 p-6">

            <h2 className="text-xl font-semibold">
              Payment Information
            </h2>

            {rental.payment ? (
              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span>Status</span>

                  <Badge>
                    {rental.payment.status}
                  </Badge>

                </div>

                <div className="flex items-center justify-between">

                  <span>Amount</span>

                  <span className="font-semibold">
                    $
                    {Number(
                      rental.payment.amount
                    ).toLocaleString()}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span>Provider</span>

                  <span>
                    {rental.payment.provider}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span>Method</span>

                  <span>
                    {rental.payment.method}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span>Transaction</span>

                  <span className="text-right text-xs">
                    {rental.payment.transactionId}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span>Paid At</span>

                  <span>
                    {new Date(
                      rental.payment.paidAt
                    ).toLocaleDateString()}
                  </span>

                </div>

              </div>
            ) : (
              <div className="space-y-4">

                <p className="text-muted-foreground">
                  Payment has not been completed yet.
                </p>

                {rental.status === "APPROVED" && (
                  <Button
                    asChild
                    className="w-full"
                  >
                    <Link
                      href={`/tenant-dashboard/payment/${rental.id}`}
                    >
                      Proceed To Payment
                    </Link>
                  </Button>
                )}

                {rental.status === "PENDING" && (
                  <Button
                    disabled
                    className="w-full"
                  >
                    Waiting For Approval
                  </Button>
                )}

                {rental.status === "REJECTED" && (
                  <Button
                    disabled
                    variant="destructive"
                    className="w-full"
                  >
                    Request Rejected
                  </Button>
                )}

              </div>
            )}

          </Card>

        </div>

      </div>

      {/* Reviews */}

      {rental.property.reviews.length > 0 && (

        <Card className="p-6">

          <h2 className="mb-6 text-2xl font-semibold">
            Reviews
          </h2>

          <div className="space-y-6">

            {rental.property.reviews.map((review) => (

              <div
                key={review.id}
                className="rounded-lg border p-4"
              >

                <div className="mb-2 flex items-center justify-between">

                  <Badge>

                    ⭐ {review.rating}/5

                  </Badge>

                  <span className="text-sm text-muted-foreground">

                    {new Date(
                      review.createdAt
                    ).toLocaleDateString()}

                  </span>

                </div>

                <p className="leading-7 text-muted-foreground">
                  {review.comment}
                </p>

              </div>

            ))}

          </div>

        </Card>

      )}

    </section>
  );
}