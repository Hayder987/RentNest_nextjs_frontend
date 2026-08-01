import CategoryList from "@/components/category/CategoryList"
import CategoryManagementSkeleton from "@/components/category/CategoryManagementSkeleton"
import { Suspense } from "react"

const AdminCategoryManagementPage = () => {
  return (
    <div>
        <Suspense fallback={<CategoryManagementSkeleton/>}>
            <CategoryList/>
        </Suspense>
    </div>
  )
}

export default AdminCategoryManagementPage