
import { IUser } from "./auth.types";

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