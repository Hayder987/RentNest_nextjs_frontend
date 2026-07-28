"use server";


import {
  RegisterState,
  ValidationError,
} from "@/lib/auth.types";
import { registerSchema } from "@/lib/validation/auth.validation";

export async function registerUserAction(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {

  
 const payload = {
  name: String(formData.get("name") ?? ""),
  email: String(formData.get("email") ?? ""),
  password: String(formData.get("password") ?? ""),
  role: String(formData.get("role") ?? ""),
  profilePhoto: String(formData.get("profilePhoto") ?? ""),
};

  // Frontend Zod Validation
  const validated = registerSchema.safeParse(payload);

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

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated.data),
        cache: "no-store",
      },
    );

    const result = await res.json();

    return {
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
      data: result.data,
      error: result.error,
    };
  } catch {
    return {
      success: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: ["Something went wrong. Please try again."],
    };
  }
}