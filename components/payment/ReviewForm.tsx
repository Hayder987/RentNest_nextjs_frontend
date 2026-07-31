"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";

import { Star } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  reviewSchema,
  ReviewFormValues,
} from "@/lib/validation/review.validation";

import { createReviewAction } from "@/app/(dashboardGroup)/_actions/TenantActions/createReviewAction";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";

interface ReviewFormProps {
  rentalRequestId: string;
  onSuccess: () => void;
}

export default function ReviewForm({
  rentalRequestId,
  onSuccess,
}: ReviewFormProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [rating, setRating] = useState(5);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),

    defaultValues: {
      rentalRequestId,
      rating: 5,
      comment: "",
    },
  });

  const onSubmit = (data: ReviewFormValues) => {
    startTransition(async () => {
      const res = await createReviewAction({
        ...data,
        rating,
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);

      form.reset({
        rentalRequestId,
        rating: 5,
        comment: "",
      });

      router.refresh();

      onSuccess();
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Rating */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Rating
        </label>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => {
                setRating(star);

                form.setValue("rating", star);
              }}
            >
              <Star
                className={`h-8 w-8 transition ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>

        <p className="mt-1 text-sm text-red-500">
          {form.formState.errors.rating?.message}
        </p>
      </div>

      {/* Comment */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Comment
        </label>

        <Textarea
          rows={5}
          placeholder="Share your experience..."
          {...form.register("comment")}
        />

        <p className="mt-1 text-sm text-red-500">
          {form.formState.errors.comment?.message}
        </p>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full"
      >
        {isPending
          ? "Submitting Review..."
          : "Submit Review"}
      </Button>
    </form>
  );
}