"use server"

export const getAllCategoryPublic = async () =>{

    const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/categories`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["all-category"],
      },
    },
  );

   const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Login failed",
    };
  }

  return result;

}
