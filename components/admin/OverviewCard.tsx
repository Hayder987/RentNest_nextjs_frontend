import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface OverviewCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  description?: string;
}

export default function OverviewCard({
  title,
  value,
  icon,
  description,
}: OverviewCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-1">
          <p className="text-muted-foreground text-sm font-medium">
            {title}
          </p>

          <h3 className="text-3xl font-bold tracking-tight">
            {value}
          </h3>

          {description && (
            <p className="text-muted-foreground text-xs">
              {description}
            </p>
          )}
        </div>

        <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}