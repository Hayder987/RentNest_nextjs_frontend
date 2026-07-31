import { LoginState, RegisterState } from "./auth.types";
import { RentalDetailsById } from "./rental.type";

export const initialRegisterState: RegisterState = {
  success: false,
  message: "",
};



export const initialLoginState: LoginState = {
  success: false,
  message: "",
};

export interface ProPertyDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export interface RentalDetailsProps {
  rental: RentalDetailsById;
}