import { api } from '@/lib/api/axios';
import { CreateReviewBody } from '../types';

export const createNewReview = async (payload: CreateReviewBody) => {
  const { data } = await api.post('/review', payload);
  return data;
};
