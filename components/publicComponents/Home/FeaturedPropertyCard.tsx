import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IProperty } from "@/lib/properties.type";

interface FeaturedPropertyCardProps {
  property: IProperty;
}

const FeaturedPropertyCard = ({ property }: FeaturedPropertyCardProps) => {
  return (
    <article className="group overflow-hidden rounded-[30px] bg-background shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-80 overflow-hidden md:h-90">
        <Image
          src={property.image}
          alt={property.title}
          fill
          priority={false}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

        {/* Category */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            {property.category.name}
          </span>
        </div>

        {/* Status */}
        <div className="absolute right-5 top-5">
          <span
            className={`rounded-full px-4 py-2 text-xs font-semibold text-white ${
              property.available ? "bg-emerald-500" : "bg-red-500"
            }`}
          >
            {property.available ? "Available" : "Rented"}
          </span>
        </div>

        {/* Property Info */}
        <div className="absolute bottom-0 w-full p-6 text-white">
          <h3 className="line-clamp-1 text-2xl font-bold">{property.title}</h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-white/90">
            <MapPin className="size-4 shrink-0" />

            <span className="line-clamp-1">{property.location}</span>
          </div>
        </div>
      </div>

      {/* White Info Box */}
      <div className="space-y-6 p-6">
        {/* Price & Reviews */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-medium">
                {property._count.reviews} Reviews
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-green-600" />

              <span>Verified Property</span>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-3xl font-bold text-primary">
              ${property.price.toLocaleString()}
            </h3>

            <p className="text-sm text-muted-foreground">Per Month</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" />

        {/* Footer */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Listed by</p>

            <h4 className="font-semibold">{property.landlord.name}</h4>
          </div>

          <Button asChild size="lg" className="rounded-full px-6">
            <Link href={`/properties/${property.id}`}>
              View Details
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPropertyCard;
