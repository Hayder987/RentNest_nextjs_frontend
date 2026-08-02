import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  House,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ContainerLg from "@/components/shared/Container/ContainerLg";
import WhyChooseCard from "./WhyChooseCard";

const features = [
  {
    icon: <House className="size-8" />,
    title: "Verified Properties",
    description:
      "Browse carefully verified rental properties with accurate information, quality images, and trusted listings.",
  },
  {
    icon: <ShieldCheck className="size-8" />,
    title: "Trusted Landlords",
    description:
      "Connect with reliable landlords and enjoy a transparent rental experience without hidden surprises.",
  },
  {
    icon: <CreditCard className="size-8" />,
    title: "Secure Payments",
    description:
      "Pay your rent securely through our protected payment system with complete peace of mind.",
  },
  {
    icon: <BadgeCheck className="size-8" />,
    title: "Fast Rental Process",
    description:
      "From searching to moving in, complete the rental process quickly with a smooth approval workflow.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background via-primary/5 to-background" />

      <ContainerLg>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="text-primary inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
            Why Choose RentNest
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Everything You Need For
            <span className="text-primary block">
              A Better Rental Experience
            </span>
          </h2>

          <p className="text-muted-foreground mt-6 text-base leading-8">
            RentNest makes renting easier by providing verified properties,
            trusted landlords, secure online payments, and a fast rental
            process—all in one platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <WhyChooseCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 overflow-hidden rounded-[32px] bg-primary p-8 text-center text-primary-foreground shadow-xl sm:p-10 lg:mt-24 lg:p-14">
          <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Start Your Rental Journey Today
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/90 sm:text-base">
            Thousands of tenants have already found their perfect homes with
            RentNest. Browse verified properties and discover your next home
            today.
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 rounded-full px-8"
          >
            <Link href="/properties">
              Explore Properties
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </ContainerLg>
    </section>
  );
};

export default WhyChooseSection;