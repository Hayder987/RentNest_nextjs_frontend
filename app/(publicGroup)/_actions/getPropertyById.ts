"use server";

export async function getPropertyById(id: string) {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/${id}`,
    {
      cache: "no-store",
    },
  );

  const result = await res.json();

  return result;
}
