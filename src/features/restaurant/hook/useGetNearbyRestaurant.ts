import { useQuery } from '@tanstack/react-query';
import {
  getNearbyRestaurants,
  GetNearbyRestaurantsParams,
} from '../service/restaurant.service';

export const useGetNearbyRestaurant = (
  params: GetNearbyRestaurantsParams,
  enabled = true
) => {
  return useQuery({
    queryKey: ['restaurant', 'nearby', params],
    queryFn: () => getNearbyRestaurants(params),
    enabled,
  });
};
