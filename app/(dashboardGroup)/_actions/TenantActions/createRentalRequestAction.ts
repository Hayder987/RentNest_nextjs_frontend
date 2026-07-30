"use server";

import {
  CreateRentalRequestPayload,
  RentalRequestResponse,
} from "@/lib/rental.type";
import { cookies } from "next/headers";

export async function createRentalRequestAction(
  payload: CreateRentalRequestPayload,
): Promise<RentalRequestResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/rentals`, {
    method: "POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  return result;
}
