"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCategoryAction } from "@/app/(dashboardGroup)/_actions/AdminActions/createCategoryAction";
import { CategoryFormValues, categorySchema } from "@/lib/validation/category.schema";

const initialState = {
  success: false,
  message: "",
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateCategoryDialog({
  open,
  onOpenChange,
}: Props) {
  const [state, formAction, pending] = useActionState(
    createCategoryAction,
    initialState
  );

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      form.reset();

      onOpenChange(false);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Add Category
          </DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-5">
          <div>
            <Label>Name</Label>

            <Input
              {...form.register("name")}
              placeholder="Category name"
            />

            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.name?.message}
            </p>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={pending}
            >
              {pending
                ? "Creating..."
                : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}