
import RentalDetailsList from "@/components/rentals/RentalDetailsList";
import RentalDetailsSkeleton from "@/components/rentals/RentalDetailsSkeleton";
import { Suspense } from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function RentalDetailsPage({ params }: Props) {
  

  return (
    <div className="">

     <Suspense fallback={<RentalDetailsSkeleton/>}>
      <RentalDetailsList params={ params }/>
     </Suspense>

    </div>
  )
}
