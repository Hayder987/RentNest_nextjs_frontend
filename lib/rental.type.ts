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