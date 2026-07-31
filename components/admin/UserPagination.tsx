"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AdminUsersMeta } from "@/lib/admin-user.type";

interface UserPaginationProps {
  meta: AdminUsersMeta;
}

export default function UserPagination({ meta }: UserPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = meta.page;
  const totalPages = meta.totalPages;

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-muted-foreground text-sm">
        Showing page <span className="font-semibold">{meta.page}</span> of{" "}
        <span className="font-semibold">{meta.totalPages}</span> ({meta.total}{" "}
        users)
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button variant="outline" className="pointer-events-none">
          {currentPage}
        </Button>

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
