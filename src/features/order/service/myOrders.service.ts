import { ApiResponse } from '@/types/api.type';
import { GetMyOrdersData, TransactionStatus } from '../types';
import { api } from '@/lib/api/axios';

export type GetMyOrderParams = {
  status?: TransactionStatus;
  page?: number;
  limit?: number;
};

export const getMyOrder = async ({
  status,
  page = 1,
  limit = 10,
}: GetMyOrderParams) => {
  const { data } = await api.get<ApiResponse<GetMyOrdersData>>(
    '/order/my-order',
    {
      params: {
        status,
        page,
        limit,
      },
    }
  );
  return data;
};
