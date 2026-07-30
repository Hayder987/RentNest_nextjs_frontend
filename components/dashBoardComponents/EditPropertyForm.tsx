"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/shared/ImageUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { addPropertySchema } from "@/lib/validation/property.validtion";
import { addPropertyAction } from "@/app/(dashboardGroup)/_actions/LandLordActions/addPropertyAction";
import { toast } from "sonner";
import { CategoriesResponse } from "@/lib/properties.type";

interface AddPropertyFormProps {
  categories: CategoriesResponse;
}

type EditPropertyFormValues = z.output<typeof addPropertySchema>;

export default function EditPropertyForm({ categories }: AddPropertyFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const form = useForm<
    z.input<typeof addPropertySchema>,
    undefined,
    z.output<typeof addPropertySchema>
  >({
    resolver: zodResolver(addPropertySchema),

    defaultValues: {
      title: "",
      description: "",
      location: "",
      price: 0,
      categoryId: "",
      available: true,
    },
  });

  const onSubmit: SubmitHandler<EditPropertyFormValues> = (data) => {
    if (!image) {
      toast.error("Please upload a property image.");
      return;
    }

    startTransition(async () => {
      const res = await addPropertyAction({
        ...data,
        image,
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);

      form.reset();
      setImage("");

      router.push("/landlord-dashboard/my-properties");
    });
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Edit This Property</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Image */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Property Image</label>

            <ImageUploader
              value={image}
              onChange={setImage}
              onUploading={setUploading}
            />
          </div>

          {/* Title */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>

            <Input {...form.register("title")} placeholder="Property title" />

            <p className="text-sm text-red-500">
              {form.formState.errors.title?.message}
            </p>
          </div>

          {/* Location */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <Input {...form.register("location")} placeholder="Dhaka" />
            <p className="text-sm text-red-500">
              {form.formState.errors.location?.message}
            </p>
          </div>

          {/* Price */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>
            <Input type="number" {...form.register("price")} />
            <p className="text-sm text-red-500">
              {form.formState.errors.price?.message}
            </p>
          </div>

          {/* Available */}

          <div className="flex items-center gap-2">
            <Checkbox
              checked={form.watch("available")}
              onCheckedChange={(checked) =>
                form.setValue("available", checked === true)
              }
            />
            <label>Available</label>
          </div>

          {/* Category */}

          <Controller
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>

                <SelectContent>
                  {categories?.data.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          <p className="text-sm text-red-500">
            {form.formState.errors.categoryId?.message}
          </p>

          {/* Description */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea rows={5} {...form.register("description")} />
            <p className="text-sm text-red-500">
              {form.formState.errors.description?.message}
            </p>
          </div>

          {/* submit button */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending || uploading}>
              {isPending ? "Adding Property..." : "Add Property"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
