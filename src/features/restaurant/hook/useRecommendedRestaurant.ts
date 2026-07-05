import { useQuery } from '@tanstack/react-query';
import { getRecommendedRestaurant } from '../service/restaurant.service';
import { authStore } from '@/store/auth-store';

export const useRecommendedRestaurant = () => {
  const token = authStore((state) => state.token);
  return useQuery({
    queryKey: ['restaurants', 'recommended-restaurants'],
    queryFn: getRecommendedRestaurant,
    enabled: !!token,
  });
};
