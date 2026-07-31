import AdminAllRentalList from "@/components/admin/AdminAllRentalList"
import UserTableSkeleton from "@/components/admin/UserTableSkeleton"
import { AdminRentalPageProps } from "@/lib/admin-rental.type"
import { Suspense } from "react"

const AdminAllRentalPage = ({
  searchParams,
}: AdminRentalPageProps) => {
  return (
    <div>
        <Suspense fallback={<UserTableSkeleton/>}>
            <AdminAllRentalList searchParams={searchParams}/>
        </Suspense>
    </div>
  )
}

export default AdminAllRentalPage