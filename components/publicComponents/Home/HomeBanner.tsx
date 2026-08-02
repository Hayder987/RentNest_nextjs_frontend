import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "../../../public/hero-banner.jpg"
import ContainerLg from "@/components/shared/Container/ContainerLg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-orange-50 via-background to-background py-14 md:py-20 lg:py-28 dark:from-orange-950/20">
      <ContainerLg>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <BadgeCheck className="h-4 w-4" />
              Trusted Rental Platform
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find Your
              <span className="block text-primary">
                Perfect Rental Home
              </span>
              Without the Hassle.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              RentNest helps tenants discover verified rental properties and
              enables landlords to manage listings effortlessly—all in one
              secure platform.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/properties">
                  Browse Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/register">
                  <Search className="mr-2 h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-sm text-muted-foreground">
                  Properties
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">200+</h3>
                <p className="text-sm text-muted-foreground">
                  Landlords
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">1K+</h3>
                <p className="text-sm text-muted-foreground">
                  Happy Tenants
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

            <Image
              src={heroBanner}
              alt="Modern apartment"
              width={700}
              height={650}
              priority
              className="relative rounded-3xl border object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl border bg-background/90 p-5 shadow-xl backdrop-blur">
              <p className="text-sm text-muted-foreground">
                Verified Property
              </p>

              <h4 className="mt-1 text-lg font-semibold">
                Luxury Apartment
              </h4>

              <p className="text-sm text-primary">
                Starting from $450/month
              </p>
            </div>
          </div>
        </div>
      </ContainerLg>
    </section>
  );
};

export default HeroSection;