import { getAllCategoryPublic } from "@/app/(publicGroup)/_actions/getAllCategory";
import { getPropertyById } from "@/app/(publicGroup)/_actions/getPropertyById";
import EditPropertyForm from "@/components/dashBoardComponents/EditPropertyForm";
import { notFound } from "next/navigation";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPropertyPage({
  params,
}: PageProps) {
  const { id } = await params;

  const res = await getPropertyById(id);
  const categories = await getAllCategoryPublic();

  if (!res.success) {
    notFound();
  }

  return (
    <div className="container py-8">
      <EditPropertyForm
        property={res?.data}
        categories={categories}
      />
    </div>
  );
}