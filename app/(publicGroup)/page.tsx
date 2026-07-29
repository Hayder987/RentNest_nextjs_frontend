import ExploreSection from "@/components/publicComponents/ExploreSection";
import HeroSection from "@/components/publicComponents/HomeBanner";
import ContainerLg from "@/components/shared/Container/ContainerLg";

export default function Home() {
 
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
