"use server";

import { cookies } from "next/headers";

import { AdminUsersResponse, UserSearchParams } from "@/lib/admin-user.type";

export const getAllUsersAction = async (
  params: UserSearchParams,
): Promise<AdminUsersResponse> => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const query = new URLSearchParams();

  if (params.searchTerm) {
    query.append("searchTerm", params.searchTerm);
  }

  if (params.role) {
    query.append("role", params.role);
  }

  if (params.status) {
    query.append("status", params.status);
  }

  query.append("page", params.page ?? "1");
  query.append("limit", params.limit ?? "10");

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users?${query.toString()}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  return result ;
};
