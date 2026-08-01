import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DashboardWelcomeProps {
  title: string;
  description: string;
  role: string;
  buttonText: string;
  buttonLink: string;
}

export default function DashboardWelcome({
  title,
  description,
  role,
  buttonText,
  buttonLink,
}: DashboardWelcomeProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl">
          👋
        </div>

        <p className="mb-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Welcome {role}
        </p>

        <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="mb-8 max-w-2xl text-muted-foreground">
          {description}
        </p>

        <Button asChild size="lg">
          <Link href={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}