import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface StepCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepCard = ({
  number,
  icon,
  title,
  description,
  isLast = false,
}: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-10 hidden h-0.5 w-full bg-border lg:block" />
      )}

      {/* Number */}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg">
        {number}
      </div>

      {/* Icon */}
      <div className="relative z-10 mt-6 flex h-20 w-20 items-center justify-center rounded-3xl border bg-background shadow-md transition-all duration-300 group-hover:scale-105">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-muted-foreground mt-3 max-w-xs leading-7">
        {description}
      </p>

      {!isLast && (
        <ArrowRight className="text-primary mt-8 hidden size-6 lg:block" />
      )}
    </div>
  );
};

export default StepCard;