import ContactPageComponents from "@/components/publicComponents/Contact";
import ContainerLg from "@/components/shared/Container/ContainerLg";

const ContactPage = () => {
  return (
    <ContainerLg>
      <div className="max-w-400 mx-auto px-4 w-full">
        <ContactPageComponents/>
      </div>
    </ContainerLg>
  );
};

export default ContactPage;
