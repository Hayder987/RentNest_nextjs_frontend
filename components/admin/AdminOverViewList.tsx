import { getAdminOverviewAction } from "@/app/(dashboardGroup)/_actions/AdminActions/getAdminOverviewAction";
import DashboardOverview from "./DashboardOverview";

export default async function AdminOverViewList() {
  const res = await getAdminOverviewAction();

  if (!res.success) {
    return (
      <div className="flex min-h-75 items-center justify-center">
        <p className="text-destructive text-lg font-medium">
          {res.message}
        </p>
      </div>
    );
  }

  return (
    <div className="">
        <DashboardOverview
      overview={res?.data}
    />
    </div>
  );
}