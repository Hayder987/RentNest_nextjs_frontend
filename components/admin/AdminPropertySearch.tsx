"use client";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, } from "react";
import { SearchSpinner } from "../shared/SearchSpinner";

interface AdminPropertySearchProps {
  categories: {
    id: string;
    name: string;
  }[];
}

export default function AdminPropertySearch({
  categories,
}: AdminPropertySearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPending, startTransition] = useTransition();

const updateQuery = (key: string, value: string) => {
  if (debouncedReference.current) {
    clearTimeout(debouncedReference.current);
  }

  debouncedReference.current = setTimeout(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set("page", "1");

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }, 250);
};

  return (
    <div className="">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Search */}

        <Input
          placeholder="Search property..."
          defaultValue={searchParams.get("searchTerm") ?? ""}
          onChange={(e) => {
            updateQuery("searchTerm", e.target.value);
          }}
          className="lg:max-w-sm"
        />

        {/* Category */}

        <Select
          defaultValue={searchParams.get("categoryId") ?? "all"}
          onValueChange={(value) => updateQuery("categoryId", value)}
        >
          <SelectTrigger className="w-full lg:w-56">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>

            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Available */}

        <Select
          defaultValue={searchParams.get("available") ?? "all"}
          onValueChange={(value) => updateQuery("available", value)}
        >
          <SelectTrigger className="w-full lg:w-44">
            <SelectValue placeholder="Availability" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All</SelectItem>

            <SelectItem value="true">Available</SelectItem>

            <SelectItem value="false">Rented</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear */}

        <Button variant="outline" onClick={() => router.push(pathname)}>
          <X className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>
      {
        isPending ? <SearchSpinner/> : ""
      }
    </div>
  );
}
