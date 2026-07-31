import RentalCardSkeleton from "./RentalCardSkeleton";


export default function MyRentalsSkeleton() {
  return (
    <section className="space-y-8">
      {/* Heading */}
      <div className="space-y-3">
        <div className="h-9 w-56 animate-pulse rounded-md bg-muted" />
        <div className="h-5 w-80 animate-pulse rounded-md bg-muted" />
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <RentalCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}