export const createSearchParams = ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();

  if (query?.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }

  if (query?.location) {
    params.set("location", query.location as string);
  }

  if (query?.minPrice) {
    params.set("minPrice", query.minPrice as string);
  }

  if (query?.maxPrice) {
    params.set("maxPrice", query.maxPrice as string);
  }

  if (query?.type) {
    params.set("type", query.type as string);
  }

  if (query?.landlordId) {
    params.set("landlordId", query.landlordId as string);
  }

  if (query?.sortBy) {
    params.set("sortBy", query.sortBy as string);
  }

  if (query?.sortOrder) {
    params.set("sortOrder", query.sortOrder as string);
  }

  if (query?.limit) {
    params.set("limit", query.limit as string);
  }

  if (query?.page) {
    params.set("page", query.page as string);
  }

  return params;
};