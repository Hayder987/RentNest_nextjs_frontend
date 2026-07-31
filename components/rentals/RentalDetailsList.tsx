import { getRentalByIdAction } from "@/app/(dashboardGroup)/_actions/TenantActions/getRentalByIdAction";
import RentalNotFound from "./RentalNotFound";
import RentalDetails from "./RentalDetails";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

const RentalDetailsList = async({ params }: Props) => {
  const { id } = await params;

  const res = await getRentalByIdAction(id);

  if (!res.success) {
    return <RentalNotFound />;
  }

  return (
    <div className="">
        <RentalDetails rental={res.data} />
    </div>
  );
}

export default RentalDetailsList