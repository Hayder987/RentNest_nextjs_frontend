"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { DeleteCategoryResponse } from "@/lib/category-management.type";

export async function deleteCategoryAction(
  id: string
): Promise<DeleteCategoryResponse> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories/${id}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  const result = await res.json();

  if (!res.ok) {
    return result;
  }

  revalidatePath("/admin-dashboard/categories");

  return result;
}