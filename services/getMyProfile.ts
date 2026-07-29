"use server"

import { cookies } from "next/headers"

export const getMyProfile = async () =>{

    const cookieStore = await cookies();
    
    const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
    headers: {
      // Authorization : accessToken as unknown as string,
      // Authorization : `${accessToken}`,
      // Authorization : `Bearer ${accessToken}`

      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24 * 3,
      tags: ["my-profile"],
    },
  });

   const result = await res.json();

   console.log(result, "action")

   return result;
}