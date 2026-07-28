import Link from "next/link";
import { Home, SearchX, ArrowLeft, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex max-w-xl flex-col items-center text-center">

        {/* Icon */}

        <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-primary/10">
          <Building2 className="h-14 w-14 text-primary" />

          <div className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-background shadow">
            <SearchX className="h-5 w-5 text-destructive" />
          </div>
        </div>


        {/* Badge */}

        <div className="mb-4 rounded-full border bg-muted px-5 py-1 text-sm font-medium text-muted-foreground">
          404 - Property Not Found
        </div>


        {/* Title */}

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Oops! This place is unavailable
        </h1>


        {/* Description */}

        <p className="mt-5 max-w-md text-muted-foreground">
          Looks like this page has moved, been removed, or the property
          you are searching for is no longer available.
        </p>


        {/* Actions */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>


          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Properties
            </Link>
          </Button>

        </div>


        {/* Branding */}

        <p className="mt-10 text-sm text-muted-foreground">
          Find your next home with{" "}
          <span className="font-semibold text-primary">
            RentNest
          </span>
        </p>

      </div>
    </section>
  );
}