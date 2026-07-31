"use server";

import { cookies } from "next/headers";
import { AdminRentalResponse } from "@/lib/admin-rental.type";

interface GetAdminRentalsParams {
  searchTerm?: string;
  status?: string;
  page?: string;
  limit?: string;
}

export async function getAdminRentalsAction({
  searchTerm,
  status,
  page = "1",
  limit = "10",
}: GetAdminRentalsParams): Promise<AdminRentalResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      statusCode: 401,
      message: "Unauthorized",
      data: [],
      meta: {
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
      },
    };
  }

  const params = new URLSearchParams();

  if (searchTerm) {
    params.set("searchTerm", searchTerm);
  }

  if (status) {
    params.set("status", status);
  }

  params.set("page", page);
  params.set("limit", limit);

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/rentals?${params.toString()}`,
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