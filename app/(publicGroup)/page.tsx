import HeroSection from "@/components/publicComponents/HomeBanner";
import ContainerLg from "@/components/shared/Container/ContainerLg";

export default function Home() {
 
  return (
    <section className="">
      {/* here hero banner full wide*/}
      <div className="">
        <HeroSection/>
      </div>

      {/* main content without hero */}
      <ContainerLg>
        <main className="max-w-400 mx-auto px-4 w-full">
          content
        </main>
      </ContainerLg>
    </section>
  );
}
