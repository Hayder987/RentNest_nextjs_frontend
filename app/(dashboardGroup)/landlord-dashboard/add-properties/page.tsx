import AddPropertyFormData from "@/components/dashBoardComponents/AddPropertyFormData"
import DashBoardFromSkeleton from "@/components/dashBoardComponents/DashBoardFromSkeleton"
import { Suspense } from "react"


const AddPropertiesPage = () => {
  return (
    <div>
      
      {/* properties form */}
      <Suspense fallback={<DashBoardFromSkeleton/>}>
        <AddPropertyFormData/>
      </Suspense>
    </div>
  )
}

export default AddPropertiesPage