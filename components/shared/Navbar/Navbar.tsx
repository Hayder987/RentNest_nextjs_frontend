"use client";

import Link from "next/link";
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react";

import MobileMenu from "./MobileMenu";

import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavbarProps } from "@/lib/common.type";
import { logout } from "@/services/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const userMenuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    action: "dashboard",
  },
  {
    label: "Profile",
    icon: User,
    href: "/profile",
    action: "profile",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    action: "setting",
  },
];




const NavBar = ( { userData }: NavbarProps) => {
  const router = useRouter();

  const user = userData?.data;

   const handleLogout = async(action:string) =>{
    if (action === "logout") {
      await logout();
      toast.info("User Logout SuccessFully ");
      router.push("/login");
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-400 items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Rent<span className="text-primary">Nest</span>
          </h1>

          <p className="text-[10px] tracking-[3px] text-gray-500">
            LUXURY RENTALS
          </p>
        </Link>

        <div className="flex items-center gap-5">
          <MobileMenu
            user={user}
            navLinks={navLinks}
            userMenuItems={userMenuItems}
          />

          <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {userData?.success && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full outline-none ring-offset-2 transition focus-visible:ring-2 focus-visible:ring-primary">
                  <Avatar className="h-10 w-10 cursor-pointer">
                    <AvatarImage src={user?.profilePhoto} alt={user?.name} />

                    <AvatarFallback>
                      {user?.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuLabel>
                  <p className="font-semibold">{user?.name}</p>

                  <p className="text-xs text-muted-foreground">{user.email}</p>

                  <p className="mt-1 text-xs font-medium text-primary">
                    {user?.role}
                  </p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {userMenuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <DropdownMenuItem asChild key={item.href}>
                      <Link href={item.href} className="cursor-pointer">
                        <Icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}

                <DropdownMenuSeparator />

                <DropdownMenuItem
                 className="cursor-pointer text-red-500"
                 onClick={()=>{
                  handleLogout("logout")
                 }}
                 >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
