import DashboardSidebar from "@/components/dashBoardComponents/DashBoardSidebar";
import DashboardContainer from "@/components/shared/Container/DashBoardContainer";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getMyProfile } from "@/services/getMyProfile";

const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  const userData = await getMyProfile();

  return (
    <SidebarProvider>
      <DashboardSidebar userData={userData} />

      <SidebarInset>
        <header className="flex h-16 items-center border-b bg-white px-5">
          <SidebarTrigger />
        </header>
        <DashboardContainer>
          <main className="p-6">{children}</main>
        </DashboardContainer>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashBoardLayout;
