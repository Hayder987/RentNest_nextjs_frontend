import RentalRequestsTableSkeleton from "@/components/rentals/RentalRequestsTableSkeleton"
import { Suspense } from "react"
import LandlordRentalRequestList from "../../../../components/rentals/LandlordRentalRequestList"


const LandLordAllRentalPage = () => {
  return (
    <div>
        <Suspense fallback={<RentalRequestsTableSkeleton/>}>
            <LandlordRentalRequestList/>
        </Suspense>
    </div>
  )
}

export default LandLordAllRentalPage