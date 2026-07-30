
import { ISidebarItem } from "@/lib/common.type";
import { LandPlot, LayersPlus, UserRoundPen } from "lucide-react";

// tenant side bar
 const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    title: "My Profile",
    url: "/tenant-dashboard/my-profile",
    icon: UserRoundPen,
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
  
];

// admin sidebar
 const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    title: "My Profile",
    url: "/admin-dashboard/my-profile",
    icon: UserRoundPen,
  },
];

export const sidebarMenuItems = {
    TENANT : TENANT_SIDEBAR_ITEMS,
    LANDLORD : LANDLORD_SIDEBAR_ITEMS,
    ADMIN : ADMIN_SIDEBAR_ITEMS
}


