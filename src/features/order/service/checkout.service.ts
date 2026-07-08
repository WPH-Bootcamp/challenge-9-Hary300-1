import { api } from '@/lib/api/axios';
import { CheckoutPayload, TransactionData } from '../types';
import { ApiResponse } from '@/types/api.type';

export const addOrderCheckout = async (payload: CheckoutPayload) => {
  const { data } = await api.post<ApiResponse<TransactionData>>(
    '/order/checkout',
    payload
  );
  return data;
};
