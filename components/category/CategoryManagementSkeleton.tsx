import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryManagementSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-4 w-80" />
        </div>

        <Skeleton className="h-10 w-40" />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border">
        {/* Head */}
        <div className="grid grid-cols-4 gap-4 border-b p-4">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-28" />
          <Skeleton className="ml-auto h-5 w-20" />
        </div>

        {/* Rows */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 border-b p-4"
          >
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-28" />

            <div className="flex justify-end gap-2">
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}