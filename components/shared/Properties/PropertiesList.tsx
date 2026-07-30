import PropertyFilter from "@/components/shared/Properties/PropertyFilter";
import PropertyCard from "@/components/shared/Properties/PropertyCard";
import PropertyPagination from "@/components/shared/Properties/PropertyPagination";
import { IProperty } from "@/lib/properties.type";
import { getAllProperties } from "@/app/(publicGroup)/_actions/GetAllProperties";
import { getAllCategoryPublic } from "@/app/(publicGroup)/_actions/getAllCategory";
import PropertiesNotFound from "./PropertiesNotFound";

export default async function PropertiesPublicList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;

  const properties = await getAllProperties({ query });
  const categoryData = await getAllCategoryPublic();



    if (!properties.success || !properties.data?.length) {
    return <PropertiesNotFound/>
  }

  return (
    <div className="">
      <PropertyFilter categoryData = {categoryData} />

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {properties?.data.map((property: IProperty) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <PropertyPagination meta={properties.meta} />
    </div>
  );
}
