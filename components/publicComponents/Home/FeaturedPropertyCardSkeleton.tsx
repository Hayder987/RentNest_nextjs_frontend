import ContainerLg from "@/components/shared/Container/ContainerLg";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedPropertyCardSkeleton = () => {
  return (
    <ContainerLg>
      <div className="overflow-hidden rounded-[30px] border bg-background shadow-sm">
        {/* Image */}
        <Skeleton className="h-80 w-full md:h-90" />

        {/* Content */}
        <div className="space-y-6 p-6">
          {/* Title */}
          <div className="space-y-3">
            <Skeleton className="h-7 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>

          {/* Price & Reviews */}
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-36" />
            </div>

            <div className="space-y-3 text-right">
              <Skeleton className="ml-auto h-8 w-24" />
              <Skeleton className="ml-auto h-4 w-16" />
            </div>
          </div>

          <Skeleton className="h-px w-full" />

          {/* Footer */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-36" />
            </div>

            <Skeleton className="h-11 w-full rounded-full sm:w-40" />
          </div>
        </div>
      </div>
    </ContainerLg>
  );
};

export default FeaturedPropertyCardSkeleton;
