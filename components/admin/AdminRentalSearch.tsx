"use client";

import { useRef, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminRentalSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <div className="flex flex-col gap-4 md:flex-row">
      <Input
        placeholder="Search tenant or property..."
        defaultValue={searchParams.get("searchTerm") ?? ""}
        onChange={(e) => updateQuery("searchTerm", e.target.value)}
        className="md:w-80"
      />

      <Select
        defaultValue={searchParams.get("status") ?? "all"}
        onValueChange={(value) => updateQuery("status", value)}
      >
        <SelectTrigger className="md:w-52">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>

          <SelectItem value="PENDING">Pending</SelectItem>

          <SelectItem value="APPROVED">Approved</SelectItem>

          <SelectItem value="REJECTED">Rejected</SelectItem>

          <SelectItem value="ACTIVE">Active</SelectItem>

          <SelectItem value="COMPLETED">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
