"use client";

import Marquee from "react-fast-marquee";

import ContainerLg from "@/components/shared/Container/ContainerLg";
import TechnologyCard from "./TechnologyCard";

import nextjs from "../../../public/logo/nextdotjs.svg";
import react from "../../../public/logo/react.svg";
import typescript from "../../../public/logo/typescript.svg";
import tailwindcss from "../../../public/logo/tailwindcss.svg";
import prisma from "../../../public/logo/prisma.svg";
import postgresql from "../../../public/logo/postgresql.svg";
import stripe from "../../../public/logo/stripe.svg";
import cloudinary from "../../../public/logo/cloudinary.svg";

const technologies = [
  {
    name: "Next.js",
    logo: nextjs,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "TypeScript",
    logo: typescript,
  },
  {
    name: "Tailwind CSS",
    logo: tailwindcss,
  },
  {
    name: "Prisma",
    logo: prisma,
  },
  {
    name: "PostgreSQL",
    logo: postgresql,
  },
  {
    name: "Stripe",
    logo: stripe,
  },
  {
    name: "Cloudinary",
    logo: cloudinary,
  },
];

const TechnologiesSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background via-primary/5 to-background" />

      <ContainerLg>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-primary inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
            Built With
          </span>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Modern Technologies
          </h2>

          <p className="text-muted-foreground mt-6 leading-8">
            RentNest is built using modern technologies to provide a fast,
            secure, and scalable rental experience.
          </p>
        </div>

        <Marquee
          speed={40}
          pauseOnHover
          gradient
          className="py-4"
        >
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.name}
              name={technology.name}
              logo={technology.logo}
            />
          ))}
        </Marquee>

        <Marquee
          speed={40}
          direction="right"
          pauseOnHover
          gradient
          className="mt-8 py-4"
        >
          {[...technologies].reverse().map((technology) => (
            <TechnologyCard
              key={technology.name}
              name={technology.name}
              logo={technology.logo}
            />
          ))}
        </Marquee>
      </ContainerLg>
    </section>
  );
};

export default TechnologiesSection;