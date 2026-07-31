import ProfileList from "@/components/shared/ProfileList"
import ProfileSkeleton from "@/components/shared/ProfileSkeleton"
import { Suspense } from "react"


const AdminMyProfilePage = () => {
  return (
    <div>
      <Suspense fallback={<ProfileSkeleton/>}>
        <ProfileList/>
      </Suspense>
    </div>
  )
}

export default AdminMyProfilePage