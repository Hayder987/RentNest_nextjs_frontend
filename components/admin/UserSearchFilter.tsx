"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UserSearchFilter() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "ALL") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    params.set("page", "1");

    return params.toString();
  };

  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}

      <div className="relative w-full lg:max-w-sm">
        <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />

        <Input
          placeholder="Search name or email..."
          defaultValue={searchParams.get("searchTerm") ?? ""}
          className="pl-9"
          onChange={(e) =>
            router.push(
              `${pathname}?${createQueryString(
                "searchTerm",
                e.target.value
              )}`
            )
          }
        />
      </div>

      {/* Filters */}

      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Role */}

        <Select
          defaultValue={searchParams.get("role") ?? "ALL"}
          onValueChange={(value) =>
            router.push(`${pathname}?${createQueryString("role", value)}`)
          }
        >
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Roles</SelectItem>
            <SelectItem value="TENANT">Tenant</SelectItem>
            <SelectItem value="LANDLORD">Landlord</SelectItem>
            <SelectItem value="ADMIN">Admin</SelectItem>
          </SelectContent>
        </Select>

        {/* Status */}

        <Select
          defaultValue={searchParams.get("status") ?? "ALL"}
          onValueChange={(value) =>
            router.push(`${pathname}?${createQueryString("status", value)}`)
          }
        >
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Status</SelectItem>
            <SelectItem value="ACTIVE">Active</SelectItem>
            <SelectItem value="BLOCKED">Blocked</SelectItem>
          </SelectContent>
        </Select>

        {/* Reset */}

        <Button
          variant="outline"
          onClick={() => router.push(pathname)}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}