"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  CreateCategoryResponse,
} from "@/lib/category-management.type";
import { categorySchema } from "@/lib/validation/category.schema";


export async function createCategoryAction(
  prevState: CreateCategoryResponse,
  formData: FormData
): Promise<CreateCategoryResponse> {

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const payload = {
    name: formData.get("name"),
  };

  const validated =
    categorySchema.safeParse(payload);

  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed",

      fieldErrors: validated.error.issues.map(
        (issue) => ({
          field: issue.path[0].toString(),
          message: issue.message,
        })
      ),
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Cookie: `accessToken=${accessToken}`,
      },

      body: JSON.stringify(validated.data),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    return result;
  }

  revalidatePath("/admin-dashboard/categories");

  return result;
}