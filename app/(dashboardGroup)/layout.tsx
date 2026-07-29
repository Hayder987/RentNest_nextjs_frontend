import DashboardContainer from "@/components/shared/Container/DashBoardContainer";

const DashBoardLayout =async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="min-h-full flex flex-col p-2 md:p-6">
        <DashboardContainer>
            {children}
        </DashboardContainer>
    </div>
  );
};

export default DashBoardLayout;