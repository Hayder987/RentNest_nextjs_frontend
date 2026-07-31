import { Suspense } from "react";
import MyRentalsSkeleton from "@/components/rentals/MyRentalsSkeleton";
import MyRentalListCard from "@/components/rentals/MyRentalListCard";



export default async function MyRentalsPage() {

  return (
    <div className="">
      <Suspense fallback={<MyRentalsSkeleton/>}>
        <MyRentalListCard/>
      </Suspense>
    </div>
  );
}