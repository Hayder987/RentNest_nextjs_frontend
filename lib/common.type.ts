
import { IUser } from "./auth.types";
import { LucideIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface MobileMenuProps {
  user: IUser | null;
  navLinks: {
    label: string;
    href: string;
  }[];
  userMenuItems: {
    label: string;
    href: string;
    icon: React.ElementType;
    action?: string;
  }[];
};


export interface IUserProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
}

export interface NavbarProps {
  userData: IUserProfileResponse ;
}

export interface ISidebarMenu {
  title: string;
  href: string;
  icon: LucideIcon;
}

export type ISidebarItem = {
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}
