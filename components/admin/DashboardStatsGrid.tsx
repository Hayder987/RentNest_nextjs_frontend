import {
  Building2,
  CircleDollarSign,
  Clock3,
  Home,
  KeyRound,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import { AdminOverview } from "@/lib/admin.type";
import OverviewCard from "./OverviewCard";

interface DashboardStatsGridProps {
  overview: AdminOverview;
}

export default function DashboardStatsGrid({
  overview,
}: DashboardStatsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <OverviewCard
        title="Total Users"
        value={overview.totalUser}
        icon={<Users className="h-7 w-7" />}
      />

      <OverviewCard
        title="Total Tenants"
        value={overview.totalTenant}
        icon={<UserCheck className="h-7 w-7" />}
      />

      <OverviewCard
        title="Total Landlords"
        value={overview.totalLandlord}
        icon={<Building2 className="h-7 w-7" />}
      />

      <OverviewCard
        title="Properties"
        value={overview.totalProperty}
        icon={<Home className="h-7 w-7" />}
      />

      <OverviewCard
        title="Pending Rentals"
        value={overview.pendingRental}
        icon={<Clock3 className="h-7 w-7" />}
      />

      <OverviewCard
        title="Active Rentals"
        value={overview.activeRental}
        icon={<KeyRound className="h-7 w-7" />}
      />

      <OverviewCard
        title="Completed Rentals"
        value={overview.completedRental}
        icon={<ShieldCheck className="h-7 w-7" />}
      />

      <OverviewCard
        title="Total Revenue"
        value={`৳${overview.totalRevenue.toLocaleString()}`}
        icon={<CircleDollarSign className="h-7 w-7" />}
      />
    </section>
  );
}