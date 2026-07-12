import { RestaurantListItem } from '@/features/restaurant/types';
import RestaurantCard from '../shared/RestaurantCard';
import { Button } from '../ui/button';
import { UseInfiniteQueryResult } from '@tanstack/react-query';

type CategoryGridProps = {
  restaurants: RestaurantListItem[];
  fetchNextPage?: UseInfiniteQueryResult['fetchNextPage'];
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
};
const CategoryGrid = ({
  restaurants,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: CategoryGridProps) => {
  return (
    <div className='relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 w-full'>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          logo={restaurant.logo}
          name={restaurant.name}
          place={restaurant.place}
          star={restaurant.star}
          restaurantId={restaurant.id}
        />
      ))}

      {fetchNextPage && (
        <Button
          variant='outline'
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className='absolute -bottom-14 lg:-bottom-20 left-1/2 -translate-x-1/2 max-w-40 h-10 lg:h-12 text-sm font-bold'
        >
          {isFetchingNextPage ? 'Loading...' : 'Show more'}
        </Button>
      )}
    </div>
  );
};

export default CategoryGrid;
