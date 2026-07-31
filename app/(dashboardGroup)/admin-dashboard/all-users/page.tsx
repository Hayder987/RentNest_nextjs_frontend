import AdminUsersList from "@/components/admin/AdminUsersList"
import UserTableSkeleton from "@/components/admin/UserTableSkeleton"
import { AdminUsersPageProps } from "@/lib/admin-user.type"
import { Suspense } from "react"


const AllUsersAdminPage = ({
  searchParams,
}: AdminUsersPageProps) => {
  return (
    <div>
        <Suspense fallback={<UserTableSkeleton/>}>
           <AdminUsersList searchParams={searchParams}/> 
        </Suspense>
    </div>
  )
}

export default AllUsersAdminPage