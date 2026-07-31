import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileSkeleton() {
  return (
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="p-0">
        {/* Header */}
        <div className="bg-primary/10 p-8">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            {/* Avatar */}
            <Skeleton className="h-28 w-28 rounded-full" />

            {/* User Info */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <Skeleton className="h-8 w-56 mx-auto md:mx-0" />
              <Skeleton className="h-5 w-72 mx-auto md:mx-0" />

              <div className="flex justify-center gap-2 md:justify-start">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>

            {/* Button */}
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="grid gap-5 p-6 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg border p-4 space-y-2"
            >
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-full" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-5 w-36" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}