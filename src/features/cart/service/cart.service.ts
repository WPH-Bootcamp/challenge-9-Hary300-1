import { api } from '@/lib/api/axios';
import { AddToCartPayload, CartData, UpdateCartItemPayload } from '../types';
import { ApiResponse } from '@/types/api.type';

export const addItemCart = async (payload: AddToCartPayload) => {
  await api.post('/cart', payload);
};

export const getItemsCart = async () => {
  const { data } = await api.get<ApiResponse<CartData>>('/cart');
  return data;
};

export const updateItemCart = async ({
  cartId,
  quantity,
}: UpdateCartItemPayload) => {
  await api.patch(`/cart/${cartId}`, quantity);
};

export const deleteAllItemsCart = async () => {
  await api.delete('/cart');
};

export const deleteOneItemCart = async (cartId: number) => {
  await api.delete(`/cart/${cartId}`);
};
