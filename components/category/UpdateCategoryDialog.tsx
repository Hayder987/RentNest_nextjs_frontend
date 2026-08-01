"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CategoryItem } from "@/lib/category-management.type";
import { updateCategoryAction } from "@/app/(dashboardGroup)/_actions/AdminActions/updateCategoryAction";
import {
  CategoryFormValues,
  categorySchema,
} from "@/lib/validation/category.schema";

const initialState = {
  success: false,
  message: "",
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: CategoryItem;
}

export default function UpdateCategoryDialog({
  open,
  onOpenChange,
  category,
}: Props) {
  const [state, formAction, pending] = useActionState(
    updateCategoryAction.bind(null, category.id),
    initialState,
  );

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    values: {
      name: category.name,
    },
  });

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      onOpenChange(false);
    } else {
      toast.error(state.message);
    }
  }, [state, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Category</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-5">
          <div className="space-y-2">
            <Label>Name</Label>

            <Input {...form.register("name")} placeholder="Category name" />

            {form.formState.errors.name && (
              <p className="text-sm text-red-500">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={pending}>
              {pending ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
