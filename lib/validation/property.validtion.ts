import { z } from "zod";

export const addPropertySchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title can't exceed 100 characters"),

  description: z
    .string()
    .trim()
    .min(5, "Description must be at least 5 characters"),

  location: z
    .string()
    .trim()
    .min(3, "Location is required"),

  price: z.coerce
    .number()
    .positive("Price must be greater than 0"),

  categoryId: z
    .string()
    .min(1, "Please select a category"),

  available: z.boolean().default(true),
});

export type AddPropertyFormValues = z.output<typeof addPropertySchema>;