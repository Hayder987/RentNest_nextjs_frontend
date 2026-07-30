"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlus, Loader2, X } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  value?: string;
  onChange: (url: string) => void;
  onUploading?: (loading: boolean) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ImageUploader = ({
  value = "",
  onChange,
  onUploading,
}: ImageUploaderProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");

    // File Type Validation
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    // File Size Validation
    if (file.size > MAX_FILE_SIZE) {
      setError("Image size must be less than 5 MB.");
      return;
    }

    try {
      setLoading(true);
      onUploading?.(true);

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result?.error?.message || "Image upload failed");
      }

      onChange(result.data.url);
    } catch (err) {
      console.error(err);

      setError("Image upload failed. Please try again.");
    } finally {
      setLoading(false);
      onUploading?.(false);
    }
  };

  const removeImage = () => {
    setError("");
    onChange("");
  };

  return (
    <div className="space-y-3">
      {!value ? (
        <label className="flex min-h-56 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/30 p-6 transition-colors hover:border-primary hover:bg-muted">
          {loading ? (
            <>
              <Loader2 className="mb-3 size-8 animate-spin text-primary" />
              <p className="text-sm font-medium">Uploading...</p>
            </>
          ) : (
            <>
              <ImagePlus className="mb-3 size-10 text-primary" />

              <p className="font-medium">Click to upload your profile photo</p>

              <p className="mt-1 text-center text-xs text-muted-foreground">
                JPG, PNG, WEBP
                <br />
                Maximum file size: 5 MB
              </p>
            </>
          )}

          <input
            hidden
            type="file"
            accept="image/*"
            disabled={loading}
            onChange={uploadImage}
          />
        </label>
      ) : (
        <div className="relative overflow-hidden rounded-xl border">
          <div className="relative h-60 w-full">
            <Image
              src={value}
              alt="Profile Photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-3 top-3 cursor-pointer"
            onClick={removeImage}
            disabled={loading}
          >
            <X className="size-8 bg-amber-400 rounded-full " />
          </Button>
        </div>
      )}

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
};

export default ImageUploader;
