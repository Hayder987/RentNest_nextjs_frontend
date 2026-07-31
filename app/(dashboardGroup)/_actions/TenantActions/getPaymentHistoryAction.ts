"use server";

import { cookies } from "next/headers";


export async function getPaymentHistoryAction() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },

    cache: "no-store",
  });

  const result = await res.json();

  return result;
}
