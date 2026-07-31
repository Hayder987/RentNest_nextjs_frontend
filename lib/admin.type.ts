export interface AdminOverview {
  totalUser: number;
  totalTenant: number;
  totalLandlord: number;
  totalProperty: number;
  pendingRental: number;
  activeRental: number;
  completedRental: number;
  totalRevenue: number;
}

export interface AdminOverviewResponse {
  success: boolean;
  statusCode?: number;
  message: string;
  data: AdminOverview;
}