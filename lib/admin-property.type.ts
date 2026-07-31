export interface AdminProperty {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
  available: boolean;

  landlordId: string;
  categoryId: string;

  createdAt: string;
  updatedAt: string;

  landlord: {
    id: string;
    name: string;
    email: string;
  };

  category: {
    name: string;
  };

  rentals: {
    id: string;
    status:
      | "PENDING"
      | "APPROVED"
      | "REJECTED"
      | "ACTIVE"
      | "COMPLETED";

    payment: {
      id: string;
      transactionId: string;
      amount: number;
      status: string;
      paidAt: string;
    } | null;

    review: {
      id: string;
      rating: number;
      comment: string;
    } | null;
  }[];

  _count: {
    rentals: number;
    reviews: number;
  };
}

export interface AdminPropertyMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface AdminPropertiesResponse {
  success: boolean;
  statusCode?: number;
  message: string;

  data: AdminProperty[];

  meta: AdminPropertyMeta;
}

export interface AdminPropertySearchParams {
  searchTerm?: string;
  available?: string;
  categoryId?: string;

  page?: string;
  limit?: string;
}

export interface AdminPropertyPageProps {
  searchParams: Promise<{
    searchTerm?: string;
    available?: string;
    categoryId?: string;
    page?: string;
    limit?: string;
  }>;
}