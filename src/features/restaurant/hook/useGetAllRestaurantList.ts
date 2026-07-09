import { useQuery } from '@tanstack/react-query';
import { GetRestaurantsParams } from '../types';
import { getAllRestaurantList } from '../service/restaurant.service';

export const useGetAllRestaurantList = (params: GetRestaurantsParams) => {
  return useQuery({
    queryKey: ['restaurant', params],
    queryFn: () => getAllRestaurantList(params),
  });
};
