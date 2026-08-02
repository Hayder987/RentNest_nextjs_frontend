import Link from "next/link";
import { ArrowRight, Building2, Home, Users, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import ContainerLg from "@/components/shared/Container/ContainerLg";
import StatCard from "./StatCard";

const statistics = [
  {
    icon: <Home className="size-9" />,
    value: 2500,
    suffix: "+",
    title: "Verified Properties",
  },
  {
    icon: <Building2 className="size-9" />,
    value: 450,
    suffix: "+",
    title: "Trusted Landlords",
  },
  {
    icon: <Users className="size-9" />,
    value: 1800,
    suffix: "+",
    title: "Happy Tenants",
  },
  {
    icon: <Star className="size-9" />,
    value: 98,
    suffix: "%",
    title: "Customer Satisfaction",
  },
];

const StatisticsSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-background to-background" />

      <ContainerLg>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="text-primary inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
            Statistics
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Trusted By Thousands
            <span className="text-primary block">Across Bangladesh</span>
          </h2>

          <p className="text-muted-foreground mt-6 text-base leading-8">
            Our growing community of landlords and tenants reflects our
            commitment to providing a secure and reliable rental platform.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((stat) => (
            <StatCard
              key={stat.title}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              title={stat.title}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] bg-primary p-8 text-center text-primary-foreground shadow-xl lg:p-14">
          <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Join Thousands of Happy Renters
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/90 sm:text-base">
            Whether {"you're"} searching for your next home or listing your
            property, RentNest provides a trusted platform with verified
            listings and secure rental experiences.
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

export default StatisticsSection;
