export type UserRole = "ADMIN" | "LANDLORD" | "TENANT";

export type UserStatus = "ACTIVE" | "BLOCKED";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminUsersMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface AdminUsersResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: AdminUser[];
  meta: AdminUsersMeta;
}

export interface UpdateUserStatusResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: AdminUser;
}

export interface UserSearchParams {
  searchTerm?: string;
  role?: string;
  status?: string;
  page?: string;
  limit?: string;
}

export interface AdminUsersPageProps {
  searchParams: Promise<{
    searchTerm?: string;
    role?: string;
    status?: string;
    page?: string;
    limit?: string;
  }>;
}