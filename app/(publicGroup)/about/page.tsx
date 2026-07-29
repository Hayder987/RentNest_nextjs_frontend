import AboutPageComponents from "@/components/aboutUS/AboutUs";
import ContainerLg from "@/components/shared/Container/ContainerLg";

const AboutPage = () => {
  return (
    <ContainerLg>
      <div className="max-w-400 mx-auto px-4 w-full">
        <AboutPageComponents/>
      </div>
    </ContainerLg>
  );
};

export default AboutPage;
