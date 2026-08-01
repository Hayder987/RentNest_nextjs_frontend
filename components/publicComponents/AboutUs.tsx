import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import aboutImg from "../../public/about.jpg"

const features = [
  {
    icon: Building2,
    title: "Verified Properties",
    description:
      "Browse quality rental properties listed by trusted landlords.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Safe rental requests and a smooth experience for everyone.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Helping tenants and landlords connect with confidence.",
  },
];

export default function AboutPageComponents() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <section className="grid gap-12 items-center lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            About <span className="text-primary">RentNest</span>
          </h1>

          <p className="mt-6 text-muted-foreground leading-7">
            RentNest is a modern rental platform that connects tenants and
            landlords in a simple, secure, and reliable way. Our goal is to make
            finding and managing rental properties easier through a clean and
            user-friendly experience.
          </p>

          <p className="mt-4 text-muted-foreground leading-7">
            Whether {"you're"} looking for your next home or listing your property,
            RentNest provides the tools you need to make the rental process
            smooth and hassle-free.
          </p>

          <Button asChild className="mt-8">
            <Link href="/properties">
              Browse Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div>
          <Image
            src={aboutImg}
            alt="About RentNest"
            width={700}
            height={500}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="grid gap-6 mt-20 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-xl border p-6 transition hover:shadow-lg"
            >
              <Icon className="h-10 w-10 text-primary" />

              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
}