import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  MapPin,
  Star,
  UserRound,
} from "lucide-react";

import { IProperty } from "@/lib/properties.type";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface PropertyCardProps {
  property: IProperty;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-2xl border py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          width={600}
          height={400}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <Badge className="absolute left-4 top-4">
          {property?.category.name}
        </Badge>

        <Badge
          variant={property?.available ? "default" : "destructive"}
          className="absolute right-4 top-4"
        >
          {property?.available ? "Available" : "Booked"}
        </Badge>
      </div>

      <CardContent className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">
            {property?.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {property?.location}
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {property?.description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <UserRound className="h-4 w-4 text-primary" />

            <span className="truncate">
              {property?.landlord?.name}
            </span>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span>
              {property?._count.reviews} Reviews
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-muted-foreground">
              Monthly Rent
            </p>

            <h4 className="text-2xl font-bold text-primary">
              ${property?.price.toLocaleString()}
            </h4>
          </div>

          <Badge
            variant="outline"
            className="gap-1"
          >
            <BadgeCheck className="h-3 w-3" />
            Verified
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full">
          <Link href={`/properties/${property.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;