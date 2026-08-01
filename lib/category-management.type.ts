export interface CategoryProperty {
  id: string;
  title: string;
}

export interface CategoryCount {
  properties: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;

  properties: CategoryProperty[];

  _count: CategoryCount;
}

export interface CategoryResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: CategoryItem[];
  meta: {
    total: number;
  };
}

// create category
export interface CreateCategoryPayload {
  name: string;
}

export interface CreateCategoryResponse {
  success: boolean;
  statusCode?: number;
  message: string;

  data?: {
    category: CategoryItem;
  };

  fieldErrors?: {
    field: string;
    message: string;
  }[];
}

// update category
export interface UpdateCategoryPayload {
  name: string;
}

export interface UpdateCategoryResponse {
  success: boolean;
  statusCode?: number;
  message: string;

  data?: CategoryItem;

  fieldErrors?: {
    field: string;
    message: string;
  }[];
}

// delete category
export interface DeleteCategoryResponse {
  success: boolean;
  statusCode?: number;
  message: string;
}
