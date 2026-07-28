export type UserRole = "TENANT" | "LANDLORD" | "ADMIN";

export type UserStatus = "ACTIVE" | "BLOCKED" ;

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface RegisterState {
  success: boolean;
  statusCode?: number;
  message: string;

  data?: IUser;
  error?: string[] | ValidationError[];
}

// login state

export interface LoginData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}


export interface LoginState {
  success: boolean;
  statusCode?: number;
  message: string;

  data?: LoginData;

  error?: string[] | ValidationError[];
}