import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/Navbar/Navbar";

const PublicLayout =async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="min-h-full flex flex-col">
      <NavBar/>
      <div className=" not-only:mt-20 min-h-[calc(100vh-120px)] ">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default PublicLayout;