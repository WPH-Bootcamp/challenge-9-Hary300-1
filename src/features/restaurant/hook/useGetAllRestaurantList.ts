import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GetRestaurantsParams } from '../types';
import { getAllRestaurantList } from '../service/restaurant.service';

// export const useGetAllRestaurantList = (params: GetRestaurantsParams) => {
//   return useQuery({
//     queryKey: ['restaurant', params],
//     queryFn: () => getAllRestaurantList(params),
//   });
// };

export const useGetAllRestaurantList = (
  params: Omit<GetRestaurantsParams, 'page'>,
  enabled = true
) => {
  return useInfiniteQuery({
    queryKey: ['restaurant', params],
    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      getAllRestaurantList({ ...params, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    enabled,
  });
};
