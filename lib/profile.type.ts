export interface Profile {
  id: string;
  name: string;
  email: string;
  role: "TENANT" | "LANDLORD" | "ADMIN";
  status: "ACTIVE" | "BLOCKED";
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Profile;
}