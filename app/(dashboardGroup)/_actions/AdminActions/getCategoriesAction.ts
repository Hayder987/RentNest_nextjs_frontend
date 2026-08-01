"use server";

import { CategoryResponse } from "@/lib/category-management.type";
import { cookies } from "next/headers";

export async function getCategoriesAction(): Promise<CategoryResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      statusCode: 401,
      message: "UnAuthorized",
      data: [],
      meta: {
        total: 0,
      },
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  return result;
}
