import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyDetailsSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:py-10">
      {/* Back Button */}
      <Skeleton className="mb-6 h-10 w-44 rounded-md" />

      {/* Top Section */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <Card className="overflow-hidden rounded-2xl p-0">
          <Skeleton className="h-75 w-full sm:h-112.5 lg:h-150" />
        </Card>

        {/* Property Info */}
        <div className="space-y-6">
          {/* Badges */}
          <div className="flex gap-3">
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-28 rounded-full" />
          </div>

          {/* Title */}
          <Skeleton className="h-10 w-4/5" />

          {/* Location */}
          <Skeleton className="h-5 w-52" />

          {/* Price Card */}
          <Card className="flex items-center justify-between p-6">
            <div className="space-y-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-40" />
            </div>

            <Skeleton className="h-8 w-24 rounded-full" />
          </Card>

          {/* Description */}
          <Card className="space-y-4 p-6">
            <Skeleton className="h-7 w-44" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Property Information */}
        <Card className="space-y-5 p-6">
          <Skeleton className="h-7 w-52" />

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between"
            >
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </Card>

        {/* Landlord Information */}
        <Card className="space-y-5 p-6">
          <Skeleton className="h-7 w-52" />

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-48" />
            </div>
          ))}

          <Skeleton className="h-11 w-full rounded-md" />
        </Card>
      </div>
    </section>
  );
}