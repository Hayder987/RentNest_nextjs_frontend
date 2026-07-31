
import { ISidebarItem } from "@/lib/common.type";
import { ChartLine, ClipboardClock, DollarSign, LandPlot, LayersPlus, ShoppingBag, UserCog, UserRoundPen } from "lucide-react";

// tenant side bar
 const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    title: "My Profile",
    url: "/tenant-dashboard/my-profile",
    icon: UserRoundPen,
  },
  {
    title: "My Rental",
    url: "/tenant-dashboard/my-rentals",
    icon: ShoppingBag,
  },
  {
    title: "Payment History",
    url: "/tenant-dashboard/payment-history",
    icon: DollarSign,
  },
];

// landlord side bar
 const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    title: "My Profile",
    url: "/landlord-dashboard/my-profile",
    icon: UserRoundPen,
  },
  {
    title: "Add Properties",
    url: "/landlord-dashboard/add-properties",
    icon: LayersPlus,
  },
  {
    title: "My Properties",
    url: "/landlord-dashboard/my-properties",
    icon: LandPlot,
  },
  {
    title: "All Rental Request",
    url: "/landlord-dashboard/all-rental",
    icon: ClipboardClock,
  },
  
];

// admin sidebar
 const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    title: "My Profile",
    url: "/admin-dashboard/my-profile",
    icon: UserRoundPen,
  },
  {
    title: "Site Overview",
    url: "/admin-dashboard/overview",
    icon: ChartLine,
  },
  {
    title: "User ManageMent",
    url: "/admin-dashboard/all-users",
    icon: UserCog,
  },
  {
    title: "All Properties",
    url: "/admin-dashboard/all-property",
    icon: LandPlot,
  },
  {
    title: "All Rental",
    url: "/admin-dashboard/all-rental",
    icon: ClipboardClock,
  },
];

export const sidebarMenuItems = {
    TENANT : TENANT_SIDEBAR_ITEMS,
    LANDLORD : LANDLORD_SIDEBAR_ITEMS,
    ADMIN : ADMIN_SIDEBAR_ITEMS
}


