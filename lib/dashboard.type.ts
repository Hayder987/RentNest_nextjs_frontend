
export interface AddPropertyPayload {
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
  available: boolean;
  categoryId: string;
}

export interface UpdatePropertyPayload {
  title?: string;
  description?: string;
  location?: string;
  price?: number;
  image?: string;
  available?: boolean;
  categoryId?: string;
  id: string
}


export interface IMyProperty {
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

  category: {
    id: string;
    name: string;
  };

  _count: {
    rentals: number;
    reviews: number;
  };
}

export interface IMyPropertiesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IMyProperty[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}