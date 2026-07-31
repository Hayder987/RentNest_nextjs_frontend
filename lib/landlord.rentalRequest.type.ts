import { RentalStatus } from "./rental.type";


export interface LandlordRentalRequest {
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
    image: string;
    available: boolean;

    category: {
      name: string;
    };
  };
}

export interface LandlordRentalRequestsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: LandlordRentalRequest[];
}

export interface UpdateRentalStatusPayload {
  id: string;
  status: RentalStatus;
}