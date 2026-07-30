"use server";

import { AddPropertyPayload } from "@/lib/dashboard.type";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function addPropertyAction(payload: AddPropertyPayload) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/landlord`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      statusCode: result.statusCode ?? res.status,
      message: result.message ?? "Failed to add property",
      data: null,
      errors: result.errors ?? null,
    };
  }

  if (result?.success) {
    revalidateTag("all-properties", {
      expire: 0,
    });
  }

  return {
    success: result.success,
    statusCode: result.statusCode,
    message: result.message,
    data: result.data,
  };
}
