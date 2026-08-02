import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import ContainerLg from "@/components/shared/Container/ContainerLg";
import { IProperty } from "@/lib/properties.type";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

interface FeaturedPropertiesProps {
  properties: IProperty[];
}

const FeaturedProperties = ({
  properties,
}: FeaturedPropertiesProps) => {
  if (!properties.length) {
    return (
      <section className="bg-muted/20 py-24">
        <ContainerLg>
          <div className="flex min-h-105 flex-col items-center justify-center rounded-[32px] border border-dashed bg-background text-center shadow-sm">
            <div className="bg-primary/10 mb-6 flex size-20 items-center justify-center rounded-full">
              <Home className="text-primary size-10" />
            </div>

            <h2 className="text-3xl font-bold">
              No Featured Properties
            </h2>

            <p className="text-muted-foreground mt-4 max-w-md leading-7">
              There are no featured properties available right now.
              Please check back later.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full px-8"
            >
              <Link href="/properties">
                Browse Properties
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </ContainerLg>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-orange-50/60 via-background to-background" />

      <ContainerLg>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="text-primary inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
            Featured Properties
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Discover Your
            <span className="text-primary block">
              Perfect Rental Home
            </span>
          </h2>

          <p className="text-muted-foreground mt-6 text-base leading-8">
            Browse our hand-picked featured properties selected for their
            excellent locations, premium quality, and trusted landlords.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {properties.map((property) => (
            <FeaturedPropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] bg-primary px-8 py-12 text-center text-primary-foreground shadow-xl">
          <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Looking For More Properties?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/90 sm:text-base">
            Explore our complete collection of rental homes, apartments,
            villas, and commercial spaces across your favorite locations.
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 rounded-full px-8"
          >
            <Link href="/properties">
              Browse All Properties
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </ContainerLg>
    </section>
  );
};

export default FeaturedProperties;