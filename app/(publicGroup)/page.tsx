
import { Suspense } from "react";
import HomePropertiesList from "@/components/publicComponents/Home/HomePropertiesList";
import FeaturedPropertyCardSkeleton from "@/components/publicComponents/Home/FeaturedPropertyCardSkeleton";
import HeroSection from "@/components/publicComponents/Home/HomeBanner";
import ExploreSection from "@/components/publicComponents/Home/ExploreSection";
import WhyChooseSection from "@/components/publicComponents/Home/WhyChooseSection";
import HowItWorksSection from "@/components/publicComponents/Home/HowItWorksSection";
import StatisticsSection from "@/components/publicComponents/Home/StatisticsSection";
import FAQSection from "@/components/publicComponents/Home/FAQSection";
import TechnologiesSection from "@/components/publicComponents/Home/TechnologiesSection";

export default async function Home() {

 
  return (
    <section className="">
      {/* here hero banner full wide*/}
      <div className="">
        <HeroSection/>
      </div>

      <ExploreSection/>

      <Suspense fallback={<FeaturedPropertyCardSkeleton/>}>
        <HomePropertiesList/>
      </Suspense>

      <WhyChooseSection/>

      <HowItWorksSection/>

      <StatisticsSection/>

      <FAQSection/>

      <TechnologiesSection/>
      
    </section>
  );
}
