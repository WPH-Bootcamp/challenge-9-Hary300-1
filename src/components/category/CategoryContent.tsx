'use client';

import { useSearchParams } from 'next/navigation';
import AllRestaurantsContent from './AllRestaurantsContent';
import NearbyRestaurantsContent from './NearbyRestaurantsContent';
import BestSellerRestaurants from './BestSellerRestaurants';

const CategoryContent = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') ?? 'all';

  if (mode === 'nearby') return <NearbyRestaurantsContent />;
  if (mode === 'best-seller') return <BestSellerRestaurants />;
  return <AllRestaurantsContent />;
};

export default CategoryContent;
