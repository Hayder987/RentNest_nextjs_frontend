import AdminOverViewList from "@/components/admin/AdminOverViewList"
import DashboardOverviewSkeleton from "@/components/admin/AdminOverviewSkeleton"
import { Suspense } from "react"

const SiteOverViewPage = () => {
  return (
    <div>
        <Suspense fallback={<DashboardOverviewSkeleton/>}>
           <AdminOverViewList/> 
        </Suspense>
    </div>
  )
}

export default SiteOverViewPage