import { ReactNode } from "react";

interface WhyChooseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const WhyChooseCard = ({
  icon,
  title,
  description,
}: WhyChooseCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-background p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl">
      {/* Background Circle */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150" />

      {/* Icon */}
      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>

        <p className="text-muted-foreground leading-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;