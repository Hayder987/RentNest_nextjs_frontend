import { getCategoriesAction } from "@/app/(dashboardGroup)/_actions/AdminActions/getCategoriesAction";
import CategoryManagement from "./CategoryManagement";

const CategoryList = async () => {
  const result = await getCategoriesAction();
  return (
    <div>
      <CategoryManagement categories={result.data ?? []} />
    </div>
  );
};

export default CategoryList;
