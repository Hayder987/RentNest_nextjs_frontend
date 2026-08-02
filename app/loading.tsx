import { Home } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";

interface GlobalLoadingProps {
  text?: string;
  className?: string;
}

export const GlobalLoading = ({
  text = "Loading RentNest...",
  className = "",
}: GlobalLoadingProps) => {
  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center bg-background px-4 ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Brand Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Home className="h-10 w-10 text-primary" />
        </div>

        {/* Spinner */}
        <Spinner className="mb-5 h-9 w-9 text-primary" />

        {/* Brand Name */}
        <h1 className="text-2xl font-bold tracking-tight">
          RentNest
        </h1>

        {/* Loading Text */}
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          {text}
        </p>

        {/* Animated Dots */}
        <div className="mt-6 flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;