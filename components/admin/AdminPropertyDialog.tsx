"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IPropertyDetails } from "@/lib/properties.type";
import { useQuery } from "@tanstack/react-query";
import ModalLoadingSpinner from "../shared/ModalLoadingSpinner";


interface AdminPropertyDialogProps {
  propertyId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface PropertyResponse {
  success: boolean; 
  data: IPropertyDetails;
}

export default function AdminPropertyDialog({
  propertyId,
  open,
  onOpenChange,
}: AdminPropertyDialogProps) {

const {
  data: property,
  isLoading: loading,
} = useQuery<IPropertyDetails | null>({
  queryKey: ["property", propertyId],
  queryFn: async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/properties/${propertyId}`
    );

    const result: PropertyResponse = await res.json();

    return result.data;
  },
  enabled: open && !!propertyId,
});

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Property Details</DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="py-10 text-center">
            <ModalLoadingSpinner/>
          </div>
        ) : property ? (
          <div className="space-y-5">
            <Image
              src={property.image}
              alt={property.title}
              width={900}
              height={500}
              className="h-72 w-full rounded-lg object-cover"
            />

            <div>
              <h2 className="text-2xl font-bold">{property.title}</h2>

              <p className="text-muted-foreground mt-2">
                {property.description}
              </p>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-muted-foreground text-sm">Category</p>

                <p>{property.category.name}</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Location</p>

                <p>{property.location}</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Price</p>

                <p>৳ {property.price}</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Status</p>

                {property.available ? (
                  <Badge>Available</Badge>
                ) : (
                  <Badge variant="secondary">Rented</Badge>
                )}
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Landlord</p>

                <p>{property.landlord.name}</p>

                <p className="text-sm text-muted-foreground">
                  {property.landlord.email}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Statistics</p>

                <p>Rentals :{property._count.rentals}</p>

                <p>Reviews :{property._count.reviews}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-10 text-center">Property not found.</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
