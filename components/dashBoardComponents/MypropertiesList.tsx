import { getMyProperties } from "@/app/(dashboardGroup)/_actions/LandLordActions/getMyProperties";
import { getAllCategoryPublic } from "@/app/(publicGroup)/_actions/getAllCategory";
import EditPropertyCard from "./EditPropertyCard";
import { IMyProperty } from "@/lib/dashboard.type";

const MyPropertiesList = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const properties = await getMyProperties();
  const categoryData = await getAllCategoryPublic();

  return (
    <div className="p-2 md:p-6">
      <p className="text-lg font-semibold mb-6">Total Items : {properties?.meta?.total}</p>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {properties?.data?.map((property: IMyProperty) => (
          <EditPropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default MyPropertiesList;
