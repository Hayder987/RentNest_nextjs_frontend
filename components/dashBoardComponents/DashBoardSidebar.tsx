"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, LayoutDashboard, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ISidebarItem, NavbarProps } from "@/lib/common.type";
import { sidebarMenuItems } from "@/utils/sidebarMenuItems";
import { logout } from "@/services/logout";

export default function DashboardSidebar({ userData }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  let menuItems: ISidebarItem[] = [];

  if (userData?.data?.role === "TENANT") {
    menuItems = sidebarMenuItems.TENANT;
  } else if (userData?.data?.role === "LANDLORD") {
    menuItems = sidebarMenuItems.LANDLORD;
  } else if (userData?.data?.role === "ADMIN") {
    menuItems = sidebarMenuItems.ADMIN;
  }

  const handleLogout = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.info("User Logout SuccessFully ");
      router.push("/login");
    }
  };

  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader className="border-b">
        <Link href="/" className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              Rent<span className="text-primary">Nest</span>
            </h1>
            <span className="text-xs text-muted-foreground">
              {userData?.data.role} Dashboard
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* Back Home */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home />
                    <span>Back Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Menu Items */}
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      // isActive={isActive}
                      className={cn(
                        "transition-colors",
                        isActive &&
                          "bg-[#E89D00] text-white hover:bg-[#f1b024] hover:text-white",
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
            className="bg-[#E89D00] hover:bg-[#f01708] hover:text-gray-100 text-gray-100 cursor-pointer"
              onClick={() => {
                handleLogout("logout");
              }}
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
