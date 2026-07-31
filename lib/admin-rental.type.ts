export type AdminRentalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "COMPLETED";

export interface AdminRentalTenant {
  id: string;
  name: string;
  email: string;
}

export interface AdminRentalProperty {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
}

export interface AdminRentalPayment {
  id: string;
  transactionId: string;
  amount: number;
  status: string;
  paidAt: string;
}

export interface AdminRentalReview {
  id: string;
  rating: number;
  comment: string;
}

export interface AdminRental {
  id: string;
  tenantId: string;
  propertyId: string;

  status: AdminRentalStatus;

  createdAt: string;
  updatedAt: string;

  tenant: AdminRentalTenant;

  property: AdminRentalProperty;

  payment: AdminRentalPayment | null;

  review: AdminRentalReview | null;
}

export interface AdminRentalMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface AdminRentalResponse {
  success: boolean;
  statusCode: number;
  message: string;

  data: AdminRental[];

  meta: AdminRentalMeta;
}

export interface GetAdminRentalsParams {
  searchTerm?: string;
  status?: string;
  page?: string;
  limit?: string;
}

export interface AdminRentalPageProps {
  searchParams: Promise<{
    searchTerm?: string;
    status?: string;
    page?: string;
    limit?: string;
  }>;
}