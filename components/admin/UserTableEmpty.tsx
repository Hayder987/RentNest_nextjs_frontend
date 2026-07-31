"use client";

import { SearchX } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function UserTableEmpty() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex min-h-87.5 flex-col items-center justify-center rounded-lg border border-dashed">
      <SearchX className="text-muted-foreground h-14 w-14" />

      <h2 className="mt-5 text-xl font-semibold">
        No users found
      </h2>

      <p className="text-muted-foreground mt-2 max-w-md text-center">
        No users match your current search or filter.
        Try changing the filters or reset them.
      </p>

      <Button
        className="mt-6"
        onClick={() => router.push(pathname)}
      >
        Clear Filters
      </Button>
    </div>
  );
}