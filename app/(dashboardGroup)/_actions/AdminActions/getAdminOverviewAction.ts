"use server";

import { cookies } from "next/headers";
import { AdminOverviewResponse } from "@/lib/admin.type";

export const getAdminOverviewAction =
  async (): Promise<AdminOverviewResponse> => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/overview`,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const result = await res.json();

    return result;
  };
