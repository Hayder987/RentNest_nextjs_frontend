import { Skeleton } from "@/components/ui/skeleton";

export default function RentalDetailsSkeleton() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      {/* Back Button */}

      <Skeleton className="h-10 w-44 rounded-md" />

      {/* Hero Section */}

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}

        <Skeleton className="h-87.5 w-full rounded-xl lg:h-125" />

        {/* Property Info */}

        <div className="space-y-6">
          <div className="flex gap-3">
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-28 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
          </div>

          <Skeleton className="h-28 w-full rounded-xl" />

          <div className="space-y-3 rounded-xl border p-6">
            <Skeleton className="h-7 w-52" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-10/12" />
          </div>
        </div>
      </div>

      {/* Bottom Cards */}

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Rental Information */}

        <div className="rounded-xl border p-6 space-y-5">
          <Skeleton className="h-7 w-52" />

          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>

        {/* Right Side */}

        <div className="space-y-6">
          {/* Tenant */}

          <div className="rounded-xl border p-6 space-y-4">
            <Skeleton className="h-6 w-44" />

            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>

          {/* Landlord */}

          <div className="rounded-xl border p-6 space-y-4">
            <Skeleton className="h-6 w-44" />

            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>

          {/* Payment */}

          <div className="rounded-xl border p-6 space-y-4">
            <Skeleton className="h-6 w-44" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-11 w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Reviews */}

      <div className="space-y-5">
        <Skeleton className="h-8 w-40" />

        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border p-5 space-y-4"
          >
            <div className="flex justify-between">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-9/12" />
          </div>
        ))}
      </div>
    </section>
  );
}