"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

const StatCard = ({
  icon,
  title,
  value,
  suffix = "",
  prefix = "",
}: StatCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="group rounded-[28px] border bg-background p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
    >
      <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-primary text-4xl font-bold lg:text-5xl">
        {prefix}

        {inView ? (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
          />
        ) : (
          0
        )}

        {suffix}
      </h3>

      <p className="text-muted-foreground mt-3 text-base font-medium">
        {title}
      </p>
    </div>
  );
};

export default StatCard;