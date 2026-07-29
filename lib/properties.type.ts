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