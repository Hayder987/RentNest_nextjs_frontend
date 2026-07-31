import RentalCard from "@/components/rentals/RentalCard";
import { getMyRentalRequestsAction } from "../../_actions/TenantActions/getMyRentalRequestsAction";
import { MyRentalRequest } from "@/lib/rental.type";


export default async function MyRentalsPage() {
  const res = await getMyRentalRequestsAction();

  const rentals = res.data ?? [];

  return (
    <section className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          My Rental Requests
        </h1>

        <p className="mt-2 text-muted-foreground">
          Track all of your rental requests and payment status.
        </p>
      </div>

      {/* Empty State */}

      {rentals.length === 0 ? (
        <div className="flex min-h-100 flex-col items-center justify-center rounded-xl border border-dashed">
          <h2 className="text-2xl font-semibold">
            No Rental Requests Found
          </h2>

          <p className="mt-2 text-muted-foreground">
            You {"haven't"} requested any property yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {rentals.map((rental: MyRentalRequest) => (
            <RentalCard
              key={rental.id}
              rental={rental}
            />
          ))}
        </div>
      )}
    </section>
  );
}