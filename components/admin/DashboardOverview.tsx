import { Activity } from "lucide-react";

import { AdminOverview } from "@/lib/admin.type";

import DashboardStatsGrid from "./DashboardStatsGrid";

interface DashboardOverviewProps {
  overview: AdminOverview;
}

export default function DashboardOverview({
  overview,
}: DashboardOverviewProps) {
  return (
    <section className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Admin Dashboard
          </h1>

          <p className="text-muted-foreground mt-1">
            Monitor platform performance, users, properties and rental
            activities.
          </p>
        </div>

        <div className="bg-primary/10 text-primary inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium">
          <Activity className="h-4 w-4" />
          Platform Overview
        </div>
      </div>

      {/* Statistics */}

      <DashboardStatsGrid overview={overview} />
    </section>
  );
}