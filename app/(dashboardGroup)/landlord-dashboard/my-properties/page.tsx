import MyPropertiesList from "@/components/dashBoardComponents/MypropertiesList";
import { PropertiesSkeleton } from "@/components/shared/Properties/PropertieSkeleton";
import React, { Suspense } from "react";

const MyPropertiesPage = () => {
  return (
    <div>
      <Suspense fallback={<PropertiesSkeleton/>}>
        <MyPropertiesList/>
      </Suspense>
    </div>
  );
};

export default MyPropertiesPage;
