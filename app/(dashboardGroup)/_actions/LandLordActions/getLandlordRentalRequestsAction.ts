"use server";

import { LandlordRentalRequestsResponse } from "@/lib/landlord.rentalRequest.type";
import { cookies } from "next/headers";


export async function getLandlordRentalRequestsAction(): Promise<LandlordRentalRequestsResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;  


  const res = await fetch(`${process.env.BACKEND_API_URL}/api/landlord/requests`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 4,
        tags: ["landlord-rental"],
      },
    }
  );

  const result = await res.json();

  return result;
}