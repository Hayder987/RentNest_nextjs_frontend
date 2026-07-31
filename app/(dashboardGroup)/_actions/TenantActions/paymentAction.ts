"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const paymentAction = async ({ id }: { id: string }) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;
  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const payload = {
    rentalRequestId: id,
  };

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/create`,
    {
      method: "POST",
      headers: {
        // Authorization : accessToken as unknown as string,
        // Authorization : `${accessToken}`,
        // Authorization : `Bearer ${accessToken}`

        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message,
    };
  }

  if (result?.success) {
    revalidateTag("my-rental", {
      expire: 0,
    });

    revalidateTag("landlord-rental", {
      expire: 0,
    });

    revalidateTag("my-properties", {
      expire: 0,
    });
  }

  if (result.success && result?.data?.checkoutUrl) {
    redirect(result.data.checkoutUrl);
  }
};
