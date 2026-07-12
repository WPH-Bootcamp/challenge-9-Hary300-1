'use client';
import { useSearchParams } from 'next/navigation';
import CategoryGrid from './CategoryGrid';
import { EmptyData } from '../shared/EmptyData';
import { useGetNearbyRestaurant } from '@/features/restaurant/hook/useGetNearbyRestaurant';
import Loading from '../shared/Loading';
import { useState } from 'react';

const NearbyRestaurantsContent = () => {
  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const searchParams = useSearchParams();
  const nearbyQuery = {
    range: searchParams.get('range')
      ? Number(searchParams.get('range'))
      : undefined,
    limit: 4,
  };

  const {
    data: nearbyRestaurantsResponse,
    isLoading,
    error,
  } = useGetNearbyRestaurant(nearbyQuery);

  if (isLoading)
    return (
      <div className='w-full'>
        <Loading />
      </div>
    );

  if (error) return <p>{error.message}</p>;

  const restaurants = nearbyRestaurantsResponse?.data.restaurants ?? [];
  console.log('Nearby');
  return (
    <div className='w-full'>
      {restaurants.length > 0 ? (
        <CategoryGrid restaurants={restaurants} />
      ) : (
        <EmptyData />
      )}
    </div>
  );
};

export default NearbyRestaurantsContent;
