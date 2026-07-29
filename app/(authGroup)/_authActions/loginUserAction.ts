"use server";

import { LoginState, ValidationError } from "@/lib/auth.types";
import { loginSchema } from "@/lib/validation/auth.validation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function LoginUserAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const payload = {
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  };

  // Frontend Zod Validation
  const validated = loginSchema.safeParse(payload);

  if (!validated.success) {
    const errors: ValidationError[] = validated.error.issues.map((issue) => ({
      field: issue.path[0].toString(),
      message: issue.message,
    }));

    return {
      success: false,
      statusCode: 400,
      message: "Validation Error",
      error: errors,
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validated.data),
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Login failed",
    };
  }

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data?.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 3,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data?.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 15,
      sameSite: "lax",
    });
  }
  
  // after login redirect role base dashboard route
  if(result?.data?.user.role === "TENANT"){
    redirect("/tenant-dashboard")
  }
  else if(result?.data?.user.role === "LANDLORD"){
    redirect("/landlord-dashboard")
  }
  else if(result?.data?.user.role === "ADMIN"){
    redirect("/admin-dashboard")
  }
  
  return {
    success: result.success,
    statusCode: result.statusCode,
    message: result.message,
    data: result.data,
    error: result.error,
  };
}
