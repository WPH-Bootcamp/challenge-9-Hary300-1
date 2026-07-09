import { api } from '@/lib/api/axios';
import {
  GetRestaurantsParams,
  RecommendedRestaurantData,
  RestaurantDetail,
  RestaurantListData,
} from '../types';
import { ApiResponse } from '@/types/api.type';

export const getRecommendedRestaurant = async () => {
  const { data } =
    await api.get<ApiResponse<RecommendedRestaurantData>>('/resto/recommended');
  return data;
};

export const getRestaurantDetail = async (restaurantId: number) => {
  const { data } = await api.get<ApiResponse<RestaurantDetail>>(
    `/resto/${restaurantId}?limitMenu=10&limitReview=6`
  );
  return data;
};

export const getAllRestaurantList = async (params: GetRestaurantsParams) => {
  const { data } = await api.get<ApiResponse<RestaurantListData>>('/resto', {
    params,
  });
  return data;
};
