import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z.email("Please provide a valid email address").trim().toLowerCase(),

  password: z
    .string()
    .min(6, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters"),

  role: z.enum(["TENANT", "LANDLORD"], {
    error: "Please select your role",
  }),

  profilePhoto: z
    .string()
    .url("Profile photo must be a valid URL")
    .optional()
    .or(z.literal("")),
});

export type RegisterInput = z.infer<typeof registerSchema>;