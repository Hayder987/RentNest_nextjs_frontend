import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  User,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { MyRentalRequest } from "@/lib/rental.type";


interface Props {
  rental: MyRentalRequest;
}

export default function RentalCard({
  rental,
}: Props) {
  const getStatusBadge = () => {
    switch (rental.status) {
      case "PENDING":
        return (
          <Badge
            variant="secondary"
            className="gap-1"
          >
            <Clock3 className="h-3 w-3" />
            Pending
          </Badge>
        );

      case "APPROVED":
        return (
          <Badge className="gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Approved
          </Badge>
        );

      case "REJECTED":
        return (
          <Badge
            variant="destructive"
            className="gap-1"
          >
            <XCircle className="h-3 w-3" />
            Rejected
          </Badge>
        );

      case "ACTIVE":
        return (
          <Badge className="gap-1">
            Active
          </Badge>
        );

      case "COMPLETED":
        return (
          <Badge
            variant="outline"
            className="gap-1"
          >
            Completed
          </Badge>
        );
    }
  };

  return (
    <Card className="overflow-hidden py-0 transition hover:shadow-xl">

      <Image
        src={rental.property.image}
        alt={rental.property.title}
        width={600}
        height={400}
        className="h-52 w-full object-cover"
      />

      <CardContent className="space-y-4 p-5">

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              {rental.property.title}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {rental.property.location}
            </div>

          </div>

          {getStatusBadge()}

        </div>

        <div className="grid gap-3 text-sm">

          <div className="flex items-center gap-2">
            <Home className="h-4 w-4 text-primary" />

            <span>
              Category :
            </span>

            <span className="font-medium">
              {rental.property.category.name}
            </span>

          </div>

          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />

            <span>
              {rental.property.landlord.name}
            </span>

          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />

            <span>
              {new Date(
                rental.createdAt
              ).toLocaleDateString()}
            </span>

          </div>

        </div>

        <div className="border-t pt-4">

          <p className="text-sm text-muted-foreground">
            Monthly Rent
          </p>

          <h2 className="text-3xl font-bold text-primary">

            ৳
            {rental.property.price.toLocaleString()}

          </h2>

        </div>

      </CardContent>

      <CardFooter className="flex flex-col gap-3 p-5 pt-0">

        <Button
          asChild
          className="w-full"
          variant="outline"
        >
          <Link href={`/tenant-dashboard/my-rentals/${rental.id}`}>
            View Details
          </Link>
        </Button>

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

      </CardFooter>

    </Card>
  );
}