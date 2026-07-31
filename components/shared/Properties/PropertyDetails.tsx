import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Calendar,
  Mail,
  MapPin,
  Star,
  User,
  ArrowLeft,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IPropertyDetails } from "@/lib/properties.type";
import { IUserProfileResponse } from "@/lib/common.type";
import RentalRequestDialog from "@/components/rentals/RentalRequestDialog";

interface Props {
  property: IPropertyDetails;
  userData: IUserProfileResponse;
}

export default function PropertyDetails({ property, userData }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:py-10">
      {/* Back Button */}

      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/properties">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}

        <Card className="overflow-hidden rounded-2xl p-0">
          <Image
            src={property.image}
            alt={property.title}
            width={900}
            height={700}
            className="h-75 w-full object-cover md:h-112.5 lg:h-120"
            priority
          />
        </Card>

        {/* Property Info */}

        <div className="space-y-6">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>{property.category.name}</Badge>

              <Badge variant={property.available ? "default" : "destructive"}>
                {property.available ? "Available" : "Unavailable"}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold lg:text-4xl">{property.title}</h1>

            <div className="mt-3 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{property.location}</span>
            </div>
          </div>

          <Card className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Rent</p>

              <h2 className="text-3xl font-bold text-primary lg:text-4xl">
                $ {property.price.toLocaleString()}
              </h2>
            </div>

            <Badge variant="outline" className="gap-1">
              <BadgeCheck className="h-4 w-4" />
              Verified
            </Badge>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Description</h2>

            <p className="leading-8 text-muted-foreground">
              {property.description}
            </p>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Property Information */}

        <Card className="space-y-5 p-6">
          <h2 className="text-xl font-semibold">Property Information</h2>

          <div className="flex justify-between">
            <span>Category</span>
            <span>{property.category.name}</span>
          </div>

          <div className="flex justify-between">
            <span>Status</span>

            <Badge>{property.available ? "Available" : "Unavailable"}</Badge>
          </div>

          <div className="flex justify-between">
            <span>Total Rentals</span>
            <span>{property._count.rentals}</span>
          </div>

          <div className="flex justify-between">
            <span>Total Reviews</span>
            <span>{property._count.reviews}</span>
          </div>

          <div className="flex justify-between">
            <span>Posted On</span>
            <span>{new Date(property.createdAt).toLocaleDateString()}</span>
          </div>
        </Card>

        {/* Landlord */}

        <Card className="space-y-5 p-6">
          <h2 className="text-xl font-semibold">Landlord Information</h2>

          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-primary" />
            <span>{property.landlord.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>{property.landlord.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span>{property._count.reviews} Reviews</span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <span>{new Date(property.createdAt).toLocaleDateString()}</span>
          </div>

          {userData?.success && userData?.data?.role === "TENANT" ? (
            <>
              {property.available ? (
                <RentalRequestDialog
                  propertyId={property.id}
                  propertyTitle={property.title}
                />
              ) : (
                <Button className="w-full" disabled>
                  Not Available
                </Button>
              )}
            </>
          ) : (
            <p className="text-red-500">Only TENANT Can send Rental Request!</p>
          )}
        </Card>
      </div>
    </section>
  );
}
