"use client";

import Link from "next/link";
import { Settings, LogOut, User, LayoutDashboard } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
];

const NavBar = () => {
  const user = {
    data: {
      name: "Hayder",
      email: "hayder@gmail.com",
    },
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-400 mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}

        <Link href="/" className="group">
          <h1 className="text-2xl font-bold tracking-wide text-gray-900">
            Rent<span className="text-primary">Nest</span>
          </h1>

          <p className="text-[10px] tracking-[3px] text-gray-500">
            LUXURY RENTALS
          </p>
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Profile */}

          <div>
            {!user.data ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none rounded-full focus:ring-2 focus:ring-primary">
                  <Avatar className="h-10 w-10 border border-primary/30">
                    <AvatarImage src="/user-image.png" alt="Profile" />

                    <AvatarFallback className="bg-primary text-white">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56 rounded-xl">
                  <DropdownMenuLabel>
                    <p className="font-semibold">name</p>

                    <p className="text-xs text-muted-foreground">
                      email
                    </p>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  {userMenuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <DropdownMenuItem
                        key={item.action}
                        className="cursor-pointer hover:bg-primary/10"
                      >
                        <Icon className="mr-2 h-4 w-4 text-primary" />

                        {item.label}
                      </DropdownMenuItem>
                    );
                  })}

                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="cursor-pointer text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;