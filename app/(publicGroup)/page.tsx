import ContainerLg from "@/components/shared/Container/ContainerLg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="">
      {/* here hero banner full wide*/}
      <div className="">
        <p className="text-xl">hero banner</p>
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
