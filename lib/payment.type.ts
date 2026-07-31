/* ---------------- Rental Status ---------------- */

export type RentalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "COMPLETED";

/* ---------------- Payment Status ---------------- */

export type PaymentStatus =
  | "PENDING"
  | "PAID"
  | "FAILED";


export interface PaymentHistoryResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: PaymentHistory[];
}

export interface PaymentHistory {
  id: string;
  rentalRequestId: string;

  provider: string;
  method: string;

  sessionId: string;
  transactionId: string;

  amount: number;
  status: PaymentStatus;

  paidAt: string;

  rentalRequest: RentalRequest;
}

export interface RentalRequest {
  id: string;
  status: RentalStatus;

  property: Property;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;

  category: {
    name: string;
  };
}



export interface CreateReviewPayload {
  rentalRequestId: string;
  rating: number;
  comment: string;
}


// review type
export interface ReviewResponse {
  success: boolean;
  statusCode?: number;
  message: string;
  data?: {
    review: Review;
  };
}

export interface Review {
  id: string;

  rating: number;
  comment: string;

  tenantId: string;
  propertyId: string;
  rentalRequestId: string;

  createdAt: string;

  tenant: ReviewTenant;

  property: ReviewProperty;

  rentalRequest?: ReviewRentalRequest;
}

export interface ReviewTenant {
  id?: string;
  name: string;
  email: string;
}

export interface ReviewRentalRequest {
  status: RentalStatus;
}

export interface ReviewProperty {
  id?: string;

  title: string;

  location?: string;

  available?: boolean;

  category?: {
    name: string;
  };
}