import ContainerLg from "@/components/shared/Container/ContainerLg";
import PropertyDetailsList from "@/components/shared/Properties/PropertyDetailsList";
import PropertyDetailsSkeleton from "@/components/shared/Properties/PropertyDetailsSkeleton";
import { ProPertyDetailsProps } from "@/lib/initial-state";
import { Suspense } from "react";

const PropertiesDetailsPage = async({
  params,
}: ProPertyDetailsProps) => {
  const { id } = await params;
  return (
    <ContainerLg>
      <Suspense fallback={<PropertyDetailsSkeleton />}>
        <PropertyDetailsList id={id} />
      </Suspense>
    </ContainerLg>
  );
};

export default PropertiesDetailsPage;
