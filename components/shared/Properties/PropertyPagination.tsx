"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

import { IPaginationMeta } from "@/lib/properties.type";

interface PropertyPaginationProps {
  meta: IPaginationMeta;
}

const PropertyPagination = ({
  meta,
}: PropertyPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page.toString());

    router.push(`/properties?${params.toString()}`);
  };

  const currentPage = meta.page;
  const totalPages = meta.totalPages;

  const pages: (number | "...")[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

//   if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={index}
            className="px-2 text-muted-foreground"
          >
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={
              page === currentPage
                ? "default"
                : "outline"
            }
            size="icon"
            onClick={() => changePage(page)}
            className="h-10 w-10"
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PropertyPagination;