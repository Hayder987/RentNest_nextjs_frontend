import { getAllCategoryPublic } from "@/app/(publicGroup)/_actions/getAllCategory";
import AdminPropertySearch from "./AdminPropertySearch";
import { AdminPropertyPageProps } from "@/lib/admin-property.type";
import { getAdminPropertiesAction } from "@/app/(dashboardGroup)/_actions/AdminActions/getAdminPropertiesAction";
import AdminPropertyTable from "./AdminPropertyTable";

const AdminPropertyList = async ({
  searchParams,
}: AdminPropertyPageProps) => {

  const params = await searchParams;

// using promise all for same time response
  const [propertiesResponse, categoriesResponse] =
    await Promise.all([
      getAdminPropertiesAction({
        searchTerm: params.searchTerm,
        available: params.available,
        categoryId: params.categoryId,
        page: params.page,
        limit: params.limit ?? "10",
      }),

      getAllCategoryPublic(),
    ]);

  if (!propertiesResponse.success) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-xl font-semibold">
          Failed to load properties
        </h2>

        <p className="text-muted-foreground mt-2">
          {propertiesResponse.message}
        </p>
      </div>
    );
  }


  return (
     <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Content Moderation
        </h1>

        <p className="text-muted-foreground mt-2">
          Browse and inspect all property listings.
        </p>
      </div>

      <AdminPropertySearch
        categories={categoriesResponse.data}
      />

      <AdminPropertyTable
        properties={propertiesResponse.data}
        meta={propertiesResponse.meta}
      />

    </div>
  );
};

export default AdminPropertyList;
