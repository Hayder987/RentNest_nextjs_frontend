export interface IProperty {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string ;
  available: boolean;
  landlordId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  landlord: ILandlord;
  category: ICategory;
  _count: IPropertyCount;
}

export interface ILandlord {
  id: string;
  name: string;
  email: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IPropertyCount {
  reviews: number;
}

export interface IPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PropertySummary {
  id: string;
  title: string;
}

export interface CategoryCount {
  properties: number;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  properties: PropertySummary[];
  _count: CategoryCount;
}

export interface CategoryMeta {
  total: number;
}

export interface CategoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category[];
  meta?: CategoryMeta;
}

export interface PropertyCount {
  rentals: number;
  reviews: number;
}

export interface IPropertyDetails {
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

  landlord: ILandlord;
  category: ICategory;
  _count: PropertyCount;
}
