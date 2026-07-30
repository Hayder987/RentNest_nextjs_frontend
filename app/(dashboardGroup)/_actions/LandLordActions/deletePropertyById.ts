"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deletePropertyById = async ({
  id,
}: {
  id: string;
}) => {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message:
        result.message ?? "Failed to delete property",
    };
  }

  if (result.success) {
    revalidateTag("my-properties", {
      expire: 0,
    });

    revalidateTag("all-properties", {
      expire: 0,
    });
  }

  return {
    success: result.success,
    message: result.message,
    data: result.data,
  };
};