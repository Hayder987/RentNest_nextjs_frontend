"use client";

import Link from "next/link";
import { LogOut, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileMenuProps } from "@/lib/common.type";

const MobileMenu = ({ user, navLinks, userMenuItems }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle asChild>
            <Link href="/">
              <span className="text-2xl font-bold">
                Rent<span className="text-primary">Nest</span>
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        {user && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border p-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.profilePhoto} alt={user.name} />

              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <h4 className="font-semibold">{user.name}</h4>

              <p className="text-xs text-muted-foreground">{user.email}</p>

              <p className="text-xs text-primary font-medium">{user.role}</p>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-4 py-3 font-medium transition hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}

          {user && (
            <>
              <div className="my-3 border-t" />

              {userMenuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-muted"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}

              <Button
                variant="destructive"
                className="mt-4 justify-start"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
              
            </>
          )}

          {!user && (
            <SheetClose asChild>
              <Link href="/login">
                <Button className="mt-4 w-full">Login</Button>
              </Link>
            </SheetClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
