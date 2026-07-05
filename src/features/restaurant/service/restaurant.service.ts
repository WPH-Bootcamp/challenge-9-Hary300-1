import { api } from '@/lib/api/axios';
import { RecommendedRestaurantResponse } from '../types';

export const getRecommendedRestaurant = async () => {
  const { data } =
    await api.get<RecommendedRestaurantResponse>('/resto/recommended');
  return data;
};
