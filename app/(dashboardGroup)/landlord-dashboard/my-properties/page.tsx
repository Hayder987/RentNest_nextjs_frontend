import MyPropertiesList from "@/components/dashBoardComponents/MypropertiesList";
import { PropertiesSkeleton } from "@/components/shared/Properties/PropertieSkeleton";
import React, { Suspense } from "react";

const MyPropertiesPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div>
      <Suspense fallback={<PropertiesSkeleton/>}>
        <MyPropertiesList searchParams={searchParams}/>
      </Suspense>
    </div>
  );
};

export default MyPropertiesPage;
