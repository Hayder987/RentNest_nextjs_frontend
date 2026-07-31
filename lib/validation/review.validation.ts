import { z } from "zod";

export const reviewSchema = z.object({
  rentalRequestId: z
    .string()
    .min(1, "Rental request is required"),

  rating: z
    .number({
      error: "Please select a rating.",
    })
    .min(1, "Minimum rating is 1 star.")
    .max(5, "Maximum rating is 5 stars."),

  comment: z
    .string()
    .trim()
    .min(10, "Comment must be at least 10 characters.")
    .max(500, "Comment cannot exceed 500 characters."),
});

export type ReviewFormValues = z.output<
  typeof reviewSchema
>;