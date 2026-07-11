'use client';
import RestaurantCard from '../shared/RestaurantCard';
import { EmptyData } from '../shared/EmptyData';
import { useSearchParams } from 'next/navigation';
import { useSearchRestaurant } from '@/features/restaurant/hook/useSearchRestaurant';
import Loading from '../shared/Loading';
import { Button } from '@/components/ui/button';

const SearchRestaurantGrid = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const {
    data: restaurantsResponse,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchRestaurant({ q });
  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const restaurants =
    restaurantsResponse?.pages.flatMap((page) => page.data.restaurants) ?? [];

  return restaurants.length === 0 ? (
    <EmptyData>No Result</EmptyData>
  ) : (
    <div className='relative grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 w-full'>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          logo={restaurant.logo}
          name={restaurant.name}
          place={restaurant.place}
          restaurantId={restaurant.id}
          star={restaurant.star}
        />
      ))}
      <Button
        variant='outline'
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className='absolute -bottom-14 lg:-bottom-20 left-1/2 -translate-x-1/2 max-w-40 h-10 lg:h-12 text-sm font-bold'
      >
        {isFetchingNextPage ? 'Loading...' : 'Show more'}
      </Button>
    </div>
  );
};

export default SearchRestaurantGrid;
