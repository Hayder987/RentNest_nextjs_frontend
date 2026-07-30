import { getMyProperties } from "@/app/(dashboardGroup)/_actions/LandLordActions/getMyProperties";
import { getAllCategoryPublic } from "@/app/(publicGroup)/_actions/getAllCategory";
import EditPropertyCard from "./EditPropertyCard";
import { IMyProperty } from "@/lib/dashboard.type";
import { Badge } from "../ui/badge";

const MyPropertiesList = async () => {
  const properties = await getMyProperties();
  const categoryData = await getAllCategoryPublic();

  return (
    <div className="px-1 md:px-3">
      <div className="flex flex-col mb-6 gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            My Properties
          </h2>

          <p className="text-sm text-muted-foreground">
            Manage all your listed rental properties.
          </p>
        </div>

        <Badge variant="secondary" className="w-fit px-4 py-1 text-sm">
          Total: {properties?.meta?.total ?? 0}
        </Badge>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {properties?.data?.map((property: IMyProperty) => (
          <EditPropertyCard key={property.id} property={property} categoryData={categoryData} />
        ))}
      </div>
    </div>
  );
};

export default MyPropertiesList;
