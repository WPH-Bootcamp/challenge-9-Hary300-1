import { RestaurantListItem } from '@/features/restaurant/types';
import RestaurantCard from '../shared/RestaurantCard';

type CategoryGridProps = {
  restaurants: RestaurantListItem[];
};
const CategoryGrid = ({ restaurants }: CategoryGridProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5 w-full'>
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
    </div>
  );
};

export default CategoryGrid;
