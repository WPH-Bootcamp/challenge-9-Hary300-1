export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type ApiErrorResponse = {
  success: boolean;
  message: string;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};
