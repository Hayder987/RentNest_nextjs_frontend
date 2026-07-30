import { getAllCategoryPublic } from "@/app/(publicGroup)/_actions/getAllCategory";
import { getPropertyById } from "@/app/(publicGroup)/_actions/getPropertyById";
import EditPropertyForm from "./EditPropertyForm";
import PropertiesNotFound from "../shared/Properties/PropertiesNotFound";

// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

const EditPropertyFromData = async ({id}: {id:string}) => {
//   const { id } = await params;

  const res = await getPropertyById(id);
  const categories = await getAllCategoryPublic();

  if (!res.success) {
    return <PropertiesNotFound />;
  }
  return (
    <div>
      <EditPropertyForm property={res?.data} categories={categories} />
    </div>
  );
};

export default EditPropertyFromData;
