
import { PropertiesSkeleton } from "@/components/shared/Properties/PropertieSkeleton";
import PropertiesPublicList from "@/components/shared/Properties/PropertiesList";
import { PropertiesSearchBar } from "@/components/shared/Properties/PropertiesSearchBar";
import { Suspense } from "react";


export default async function PropertiesPublicPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  

  return (
    <div className="mt-10 max-w-7xl mx-auto py-10 px-4">

       <div className="max-w-7xl mb-6 rounded-xl border bg-card flex flex-wrap gap-4 justify-between items-center mx-auto py-4 px-4">
        <h1 className="text-3xl font-bold">All Properties</h1>
        <PropertiesSearchBar/>
      </div>
     
     <Suspense fallback={<PropertiesSkeleton />}>
        <PropertiesPublicList searchParams={searchParams} />
      </Suspense>
     
    </div>
  );
}