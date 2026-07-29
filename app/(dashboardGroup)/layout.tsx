import DashboardContainer from "@/components/shared/Container/DashBoardContainer";
import { getMyProfile } from "@/services/getMyProfile";

const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  const userData = await getMyProfile();

  return (
    <div className="min-h-full flex flex-col p-2 md:p-6">
      <DashboardContainer>{children}</DashboardContainer>
    </div>
  );
};

export default DashBoardLayout;
