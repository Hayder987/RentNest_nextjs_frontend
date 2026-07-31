import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentHistorySkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-72" />

      <div className="overflow-hidden rounded-xl border">
        <div className="space-y-4 p-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4"
            >
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}