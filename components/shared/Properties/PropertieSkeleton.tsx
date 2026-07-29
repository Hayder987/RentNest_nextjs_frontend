export function PropertiesSkeleton() {
  return (
    <div className=" max-w-400 mx-auto p-2 md:p-6 mt-4 md:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-64 animate-pulse rounded-2xl bg-muted" />
      ))}
    </div>
  );
}