import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import exploreImg from "../../../public/explore1.jpg"
import houseImg from "../../../public/house1.jpg"
import luxeryImg from "../../../public/luxery1.jpg"
import ContainerLg from "@/components/shared/Container/ContainerLg";

const categories = [
  {
    title: "Apartments",
    properties: "120+ Properties",
    image: exploreImg,
  },
  {
    title: "Family Houses",
    properties: "80+ Properties",
    image: houseImg,
  },
  {
    title: "Luxury Villas",
    properties: "45+ Properties",
    image: luxeryImg,
  },
];

const ExploreSection = () => {
  return (
    <section className="py-20">
      <ContainerLg>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Discover Your Next Home
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Explore the Best Rental Properties
            <span className="block text-primary">
              Across Bangladesh
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Browse verified apartments, family houses, and luxury villas
            listed by trusted landlords on RentNest.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              href="/properties"
              key={category.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={600}
                height={700}
                className="h-107.5 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 text-primary font-medium">
                  {category.properties}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button size="lg" asChild>
            <Link href="/properties">
              Explore All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ContainerLg>
    </section>
  );
};

export default ExploreSection;