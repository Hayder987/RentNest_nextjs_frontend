"use server";

import { cookies } from "next/headers";

import {
  AdminPropertiesResponse,
  AdminPropertySearchParams,
} from "@/lib/admin-property.type";

export async function getAdminPropertiesAction(
  params: AdminPropertySearchParams
): Promise<AdminPropertiesResponse> {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in.",
    };
  }

  const query = new URLSearchParams();

  if (params.searchTerm) {
    query.set("searchTerm", params.searchTerm);
  }

  if (params.available) {
    query.set("available", params.available);
  }

  if (params.categoryId) {
    query.set("categoryId", params.categoryId);
  }

  if (params.page) {
    query.set("page", params.page);
  }

  if (params.limit) {
    query.set("limit", params.limit);
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/properties?${query.toString()}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    }
  );

  const result = await res.json();

  return result;
}