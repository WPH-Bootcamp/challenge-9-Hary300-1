import { api } from '@/lib/api/axios';
import {
  GetRestaurantsParams,
  RecommendedRestaurantData,
  RestaurantDetail,
  RestaurantListData,
  SearchRestaurantParams,
} from '../types';
import { ApiResponse } from '@/types/api.type';

export const getRecommendedRestaurants = async () => {
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
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null && value !== ''
    )
  );
  const { data } = await api.get<ApiResponse<RestaurantListData>>('/resto', {
    params: cleanParams,
  });
  return data;
};

export const searchRestaurant = async (params: SearchRestaurantParams) => {
  const { data } = await api.get<ApiResponse<RestaurantListData>>(
    '/resto/search',
    { params }
  );
  return data;
};

export type GetNearbyRestaurantsParams = {
  range?: number;
  limit?: number;
};

export const getNearbyRestaurants = async (
  params: GetNearbyRestaurantsParams
) => {
  const { data } = await api.get<ApiResponse<RestaurantListData>>(
    '/resto/nearby',
    { params }
  );
  return data;
};

export type GetBestSellerRestaurantsParams = {
  page?: number;
  limit?: number;
};

export const getBestSellerRestaurants = async (
  params: GetBestSellerRestaurantsParams
) => {
  const { data } = await api.get<ApiResponse<RestaurantListData>>(
    '/resto/best-seller',
    { params }
  );
  return data;
};
