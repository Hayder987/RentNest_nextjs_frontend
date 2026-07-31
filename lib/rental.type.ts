export type RentalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "COMPLETED";

export interface CreateRentalRequestPayload {
  propertyId: string;
}

export interface RentalRequest {
  id: string;
  tenantId: string;
  propertyId: string;
  status: RentalStatus;
  createdAt: string;
  updatedAt: string;

  tenant: {
    id: string;
    name: string;
    email: string;
  };

  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    available: boolean;

    landlord: {
      name: string;
      email: string;
    };
  };
}

export interface RentalRequestResponse {
  success: boolean;
  statusCode?: number;
  message: string;
  data?: RentalRequest;
}


export interface RentalPropertyLandlord {
  name: string;
  email: string;
}

export interface RentalPropertyCategory {
  name: string;
}

export interface RentalProperty {
  id: string;
  title: string;
  location: string;
  price: number;
  available: boolean;
  image: string;
  landlord: RentalPropertyLandlord;
  category: RentalPropertyCategory;
}

export interface MyRentalRequest {
  id: string;
  tenantId: string;
  propertyId: string;
  status: RentalStatus;
  createdAt: string;
  updatedAt: string;
  property: RentalProperty;
}

export interface MyRentalRequestResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: RentalRequest[];
}

export interface RentalTenant {
  id: string;
  name: string;
  email: string;
}

export interface RentalLandlordById {
  id: string;
  name: string;
  email: string;
}

export interface RentalCategoryById {
  id: string;
  name: string;
}

export interface RentalReview {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface RentalPropertyById {
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

  landlord: RentalLandlordById;
  category: RentalCategoryById;
  reviews: RentalReview[];
}

export interface RentalPayment {
  provider: string;
  method: string;
  transactionId: string;
  amount: string;
  status: string;
  paidAt: string;
}

export interface RentalDetailsById {
  id: string;
  tenantId: string;
  propertyId: string;
  status: RentalStatus;
  createdAt: string;
  updatedAt: string;

  tenant: RentalTenant;
  property: RentalPropertyById;
  payment: RentalPayment;
}

export interface RentalDetailsResponseById {
  success: boolean;
  statusCode: number;
  message: string;
  data: RentalDetailsById;
}

export interface PaymentActionState {
  success: boolean;
  statusCode?: number;
  message: string;
  data?: {
    sessionId: string;
    checkoutUrl: string;
  };
  fieldErrors?: {
    field: string;
    message: string;
  }[];
}