"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { UpdateUserStatusResponse } from "@/lib/admin-user.type";

interface UpdateUserStatusPayload {
  id: string;
  status: "ACTIVE" | "BLOCKED";
}

export const updateUserStatusAction = async ({
  id,
  status,
}: UpdateUserStatusPayload): Promise<UpdateUserStatusResponse> => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },

      body: JSON.stringify({
        status,
      }),
    }
  );

  const result = await res.json();

  revalidatePath("/admin-dashboard/users");

  return result;
};