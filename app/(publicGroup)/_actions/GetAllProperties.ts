"use server";

import { createSearchParams } from "@/utils/searchParams";

export const getAllProperties = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = createSearchParams({ query });

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`,
    {
      cache: "no-cache",
      next: {
        revalidate: 60 * 60 * 2,
        tags: ["all-properties"],
      },
    },
  );

  const result = await res.json();

  return result;
};
