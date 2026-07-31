import AdminPropertyList from '@/components/admin/AdminPropertyList'
import UserTableSkeleton from '@/components/admin/UserTableSkeleton'
import { AdminPropertyPageProps } from '@/lib/admin-property.type'
import React, { Suspense } from 'react'

const AdminAllPropertyPage = ({
  searchParams,
}: AdminPropertyPageProps) => {
  return (
    <div>
        <Suspense fallback={<UserTableSkeleton/>}>
         <AdminPropertyList searchParams={searchParams}/>   
        </Suspense>
    </div>
  )
}

export default AdminAllPropertyPage