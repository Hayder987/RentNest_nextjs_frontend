import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Home,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ContainerLg from "@/components/shared/Container/ContainerLg";
import StepCard from "./StepCard";

const steps = [
  {
    number: "01",
    icon: <Search className="text-primary size-10" />,
    title: "Search Property",
    description:
      "Browse hundreds of verified rental properties using filters like location, category, and budget.",
  },
  {
    number: "02",
    icon: <Home className="text-primary size-10" />,
    title: "Request Booking",
    description:
      "Choose your favorite property and send a rental request directly to the landlord.",
  },
  {
    number: "03",
    icon: <ShieldCheck className="text-primary size-10" />,
    title: "Get Approval",
    description:
      "The landlord reviews your request and approves it after verifying the details.",
  },
  {
    number: "04",
    icon: <CreditCard className="text-primary size-10" />,
    title: "Pay & Move In",
    description:
      "Complete the secure payment process and move into your new home without hassle.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background via-primary/5 to-background" />

      <ContainerLg>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="text-primary inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Rent Your Perfect Home
            <span className="text-primary block">
              In Just Four Easy Steps
            </span>
          </h2>

          <p className="text-muted-foreground mt-6 text-base leading-8">
            Renting with RentNest is simple, secure, and fast. Follow these
            four easy steps to find your next home.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] border bg-card p-8 text-center shadow-lg lg:p-12">
          <h3 className="text-2xl font-bold lg:text-3xl">
            Ready to Find Your Next Home?
          </h3>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-7">
            Explore verified rental properties across Bangladesh and start your
            rental journey with confidence.
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
};

export default HowItWorksSection;