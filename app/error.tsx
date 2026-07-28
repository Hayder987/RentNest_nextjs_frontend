"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Home,
  RotateCcw,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("RentNest Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-lg rounded-3xl border bg-card p-8 text-center shadow-lg">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[oklch(0.505_0.213_27.518)]/10">
          <Building2 className="h-10 w-10 text-[oklch(0.505_0.213_27.518)]" />
        </div>


        <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
          RentNest Error
        </span>


        <h1 className="mt-5 text-3xl font-bold">
          Something went wrong
        </h1>


        <p className="mt-3 text-muted-foreground">
          We {"couldn't"} load this RentNest page. Please try again or go back to find your perfect home.
        </p>


        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-xl bg-muted p-4 text-left">

            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />

              <p className="text-sm font-semibold">
                Development Error
              </p>
            </div>


            <pre className="max-h-40 overflow-auto whitespace-pre-wrap text-xs text-destructive">
              {error.message}
            </pre>

          </div>
        )}


        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Button
            onClick={() => reset()}
            className="bg-[oklch(0.505_0.213_27.518)] hover:bg-[oklch(0.505_0.213_27.518)]/90"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>


          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>

        </div>

      </div>
    </main>
  );
}