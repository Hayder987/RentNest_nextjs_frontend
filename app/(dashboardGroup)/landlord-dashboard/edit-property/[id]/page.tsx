
import DashBoardFromSkeleton from "@/components/dashBoardComponents/DashBoardFromSkeleton";
import EditPropertyFromData from "@/components/dashBoardComponents/EditPropertyFromData";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPropertyPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="">
      <Suspense fallback={<DashBoardFromSkeleton />}>
        <EditPropertyFromData id={id} />
      </Suspense>
    </div>
  );
}
