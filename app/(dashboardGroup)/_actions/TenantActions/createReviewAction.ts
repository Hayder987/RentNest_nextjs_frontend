"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { CreateReviewPayload, ReviewResponse } from "@/lib/payment.type";

export async function createReviewAction(
  payload: CreateReviewPayload,
): Promise<ReviewResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/reviews`, {
    method: "POST",

    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),

    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message,
    };
  }

  revalidatePath("/tenant-dashboard/payment-history");

  return {
    success: true,
    message: result.message,
  };
}
