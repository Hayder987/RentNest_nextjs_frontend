"use server";

import { cookies } from "next/headers";
import {  revalidateTag } from "next/cache";
import { UpdatedRentalRequestResponse, UpdateRentalStatusPayload } from "@/lib/landlord.rentalRequest.type";

export async function updateRentalRequestStatusAction(
  payload: UpdateRentalStatusPayload
): Promise<UpdatedRentalRequestResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests/${payload.id}`,
    {
      method: "PATCH",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: payload.status,
      }),
    }
  );

  const result = await res.json();

  if (result?.success) {
    revalidateTag("landlord-rental", {
      expire  : 0
    })

    revalidateTag("my-rental", {
      expire  : 0
    })
  }

  return result;
}