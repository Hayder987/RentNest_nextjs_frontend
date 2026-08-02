import { getAllProperties } from "@/app/(publicGroup)/_actions/GetAllProperties";
import FeaturedProperties from "./FeaturedProperties";



export default async function HomePropertiesList() {
  const propertiesResponse = await getAllProperties({
    query: {
      limit: "4",
      page: "1",
    },
  });

  return (
    <>
      <FeaturedProperties
        properties={propertiesResponse.data}
      />
    </>
  );
}