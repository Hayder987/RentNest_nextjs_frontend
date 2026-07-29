import ContainerLg from "@/components/shared/Container/ContainerLg";
import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/Navbar/Navbar";
import { getMyProfile } from "@/services/getMyProfile";

const AuthLayout =async ({ children }: { children: React.ReactNode }) => {

  const userData = await getMyProfile();
  

  return (
    <div className="min-h-full flex flex-col">
      <NavBar userData={userData}/>
      <ContainerLg className="mt-16 min-h-[calc(100vh-120px)] py-6 md:py-12">
        {children}
      </ContainerLg>
      <Footer/>
    </div>
  );
};

export default AuthLayout;