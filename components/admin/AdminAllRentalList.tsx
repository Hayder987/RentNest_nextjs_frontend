import { getAdminRentalsAction } from "@/app/(dashboardGroup)/_actions/AdminActions/getAdminRentalsAction";
import { AdminRentalPageProps } from "@/lib/admin-rental.type";
import AdminRentalSearch from "./AdminRentalSearch";
import AdminRentalTable from "./AdminRentalTable";

const AdminAllRentalList = async ({ searchParams }: AdminRentalPageProps) => {
  const params = await searchParams;

  const rentalsResponse = await getAdminRentalsAction({
    searchTerm: params.searchTerm,
    status: params.status,
    page: params.page,
    limit: params.limit ?? "10",
  });

  if (!rentalsResponse.success) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">Failed to load rentals</h2>

          <p className="text-muted-foreground">{rentalsResponse.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Rental Requests</h1>

          <p className="text-muted-foreground mt-2">
            Inspect all rental requests across the platform.
          </p>
        </div>

        <AdminRentalSearch />

        {rentalsResponse.data.length === 0 ? (
          <div className="rounded-lg border py-20 text-center">
            <h3 className="text-xl font-semibold">No Rental Requests Found</h3>

            <p className="text-muted-foreground mt-2">
              Try changing the search or filters.
            </p>
          </div>
        ) : (
          <AdminRentalTable
            rentals={rentalsResponse.data}
            meta={rentalsResponse.meta}
          />
        )}
      </section>
    </div>
  );
};

export default AdminAllRentalList;
