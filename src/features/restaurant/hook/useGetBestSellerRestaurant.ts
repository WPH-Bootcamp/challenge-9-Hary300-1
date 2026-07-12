import { useInfiniteQuery } from '@tanstack/react-query';
import {
  getBestSellerRestaurants,
  GetBestSellerRestaurantsParams,
} from '../service/restaurant.service';

export const useGetBestSellerRestaurants = (
  params: Omit<GetBestSellerRestaurantsParams, 'page'>,
  enabled = true
) => {
  return useInfiniteQuery({
    queryKey: ['restaurant', 'best-seller', params],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getBestSellerRestaurants({ ...params, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    enabled,
  });
};
