import { useInfiniteQuery } from '@tanstack/react-query';
import { searchRestaurant } from '../service/restaurant.service';
import { SearchRestaurantParams } from '../types';

// no pagination feature
// export const useSearchRestaurant = (params: SearchRestaurantParams) => {
//   return useQuery({
//     queryKey: ['restaurant', 'search', params],
//     queryFn: () => searchRestaurant(params),
//   });
// };

// pagination feature
export const useSearchRestaurant = (
  params: Omit<SearchRestaurantParams, 'page'>
) => {
  return useInfiniteQuery({
    queryKey: ['restaurant', 'search', params],
    queryFn: ({ pageParam }) =>
      searchRestaurant({
        ...params,
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
  });
};
