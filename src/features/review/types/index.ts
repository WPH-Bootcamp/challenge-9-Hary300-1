/**====================
 * My review
 =====================*/

import { Pagination } from '@/types/api.type';

export type EditMyReviewPayload = {
  reviewId: number;
  restaurantId: number;
  star: number;
  comment: string;
};

export type DeleteMyReviewPayload = {
  restaurantId: number;
  reviewId: number;
};

export type ReviewMenu = {
  menuId: number;
  menuName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
  quantity: number;
};

export type ReviewRestaurant = {
  id: number;
  name: string;
  logo: string;
};

export type RestaurantReview = {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  transactionId: string;
  restaurant: ReviewRestaurant;
  menus: ReviewMenu[];
};

export type GetMyReviewsData = {
  reviews: RestaurantReview[];
  pagination: Pagination;
};

/**====================
 * Restaurant review
 =====================*/

type ReviewUser = {
  id: number;
  name: string;
  avatar: string | null;
};

type UserReview = {
  id: number;
  star: number;
  comment: string;
  transactionId: string;
  createdAt: string;
  user: ReviewUser;
  menus: ReviewMenu[];
};

export type GetAllReviewsRestaurantData = {
  reviews: UserReview[];
  pagination: Pagination;
};

export type GetAllReviewsRestaurantParams = {
  restaurantId: number;
  page?: number;
  limit?: number;
};
