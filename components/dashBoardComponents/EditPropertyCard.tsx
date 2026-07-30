"use client";

import Image from "next/image";
import Link from "next/link";

import { Calendar, Edit, MapPin, Star, } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IMyProperty } from "@/lib/dashboard.type";
import DeletePropertyButton from "./DeletePropertyButton";

interface Props {
  property: IMyProperty;
}

export default function EditPropertyCard({ property }: Props) {
  return (
    <Card className="overflow-hidden rounded-xl py-0 transition hover:shadow-xl">
      <div className="relative">
        <Image
          src={property?.image}
          alt={property?.title}
          width={700}
          height={500}
          className="h-56 w-full object-cover"
        />

        <Badge className="absolute left-4 top-4">
          {property?.category.name}
        </Badge>

        <Badge
          variant={property?.available ? "default" : "destructive"}
          className="absolute right-4 top-4"
        >
          {property?.available ? "Available" : "Unavailable"}
        </Badge>
      </div>

      <CardContent className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-semibold">
            {property?.title}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />

            <span>{property?.location}</span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {property?.description}
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground">Monthly Rent</p>

            <p className="font-semibold text-primary">
              ৳ {property?.price.toLocaleString()}
            </p>
          </div>

          <div className="text-right">
            <p className="text-muted-foreground">Reviews</p>

            <div className="flex items-center justify-end gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              {property?._count.reviews}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>
            Rentals
            <span className="ml-2 font-semibold">
              {property?._count.rentals}
            </span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />

            {new Date(property?.createdAt).toLocaleDateString()}
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 p-5 pt-0">
        <Button asChild variant="outline">
          <Link href={`/landlord-dashboard/edit-property/${property?.id}`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </Button>

        {/* <Button
          variant="destructive"
          onClick={() => {}}
        >
          <Trash2 className="mr-2 h-4 w-4" />

          Delete
        </Button> */}
        <DeletePropertyButton id={property?.id} />
      </CardFooter>
    </Card>
  );
}
