import { getRentalByIdAction } from "@/app/(dashboardGroup)/_actions/TenantActions/getRentalByIdAction";
import RentalDetails from "@/components/rentals/RentalDetails";
import RentalNotFound from "@/components/rentals/RentalNotFound";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function RentalDetailsPage({ params }: Props) {
  const { id } = await params;

  const res = await getRentalByIdAction(id);

  if (!res.success) {
    return <RentalNotFound />;
  }

  return <RentalDetails rental={res.data} />;
}
