import ExploreSection from "@/components/publicComponents/ExploreSection";
import HeroSection from "@/components/publicComponents/HomeBanner";
import { getAllProperties } from "./_actions/GetAllProperties";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // const query = await searchParams;
  // const data = await getAllProperties({query})

  // console.log(data)
 
  return (
    <section className="">
      {/* here hero banner full wide*/}
      <div className="">
        <HeroSection/>
      </div>

      <ExploreSection/>
      
    </section>
  );
}
