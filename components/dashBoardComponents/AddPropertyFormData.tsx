import { getAllCategoryPublic } from "@/app/(publicGroup)/_actions/getAllCategory";
import AddPropertyForm from "./AddPropertyForm";

const AddPropertyFormData = async () => {
  const categories = await getAllCategoryPublic();

  return (
    <div>
      <AddPropertyForm categories={categories} />
    </div>
  );
};

export default AddPropertyFormData;
