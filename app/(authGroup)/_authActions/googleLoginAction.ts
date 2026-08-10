"use server";

import { LoginState } from "@/lib/auth.types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IPayload {
  code: string;
}

export async function googleLoginAction(
  redirectTo: string,
  code: string,
): Promise<LoginState> {
  const payload: IPayload = {
    code,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Google login failed",
    };
  }

  if (result.success) {
    const accessToken = result.data?.accessToken;
    const refreshToken = result.data?.refreshToken;

    if (!accessToken || !refreshToken) {
      return {
        success: false,
        message: "Authentication tokens not found",
      };
    }

    const cookieStore = await cookies();

     // for development
    // cookieStore.set("accessToken", result.data?.accessToken, {
    //   httpOnly: true,
    //   secure: false,
    //   maxAge: 60 * 60 * 24 * 3,
    //   sameSite: "lax",
    // });

    // cookieStore.set("refreshToken", result.data?.refreshToken, {
    //   httpOnly: true,
    //   secure: false,
    //   maxAge: 60 * 60 * 24 * 15,
    //   sameSite: "lax",
    // });

    // for production
    cookieStore.set("accessToken", result.data?.accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 3,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data?.refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 15,
      sameSite: "lax",
    });
  }

//   Custom redirect
   
  if (
    redirectTo &&
    typeof redirectTo === "string" &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//")
  ) {
    redirect(redirectTo);
  }

//   Google Login is only for TENANT

  if (result?.data?.user?.role === "TENANT") {
    redirect("/tenant-dashboard");
  }

  return {
    success: result.success,
    statusCode: result.statusCode,
    message: result.message,
    data: result.data,
    error: result.error,
  };
}
