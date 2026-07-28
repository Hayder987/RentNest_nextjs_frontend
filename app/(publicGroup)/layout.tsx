import NavBar from "@/components/shared/Navbar/Navbar";

const PublicLayout =async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="min-h-full flex flex-col">
      <NavBar/>
      <div className="max-w-400 mx-auto px-4 w-full  mt-20 min-h-[calc(100vh-120px)] ">
        {children}
      </div>
    </div>
  );
};

export default PublicLayout;