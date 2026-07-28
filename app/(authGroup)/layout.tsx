import ContainerLg from "@/components/shared/Container/ContainerLg";
import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/Navbar/Navbar";

const AuthLayout =async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="min-h-full flex flex-col">
      <NavBar/>
      <ContainerLg className="mt-20 min-h-[calc(100vh-120px)] py-6 md:py-12">
        {children}
      </ContainerLg>
      <Footer/>
    </div>
  );
};

export default AuthLayout;