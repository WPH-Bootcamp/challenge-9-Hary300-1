import { useRecommendedRestaurant } from '@/features/restaurant/hook/useRecommendedRestaurant';
import RestaurantCard from '../shared/RestaurantCard';
import SeeAll from './SeeAll';

const RecommendedSection = () => {
  const {
    data: recommendedResponse,
    isLoading,
    error,
  } = useRecommendedRestaurant();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const recommendedRestaurants = recommendedResponse?.data.recommendations;

  return (
    <section
      id='home-recommendation'
      className='flex flex-col gap-7 lg:gap-8 px-4 lg:px-30 pb-26'
    >
      <div className='flex justify-between'>
        <h2 className='font-extrabold text-display-xs lg:text-display-md items-center'>
          Recommended
        </h2>
        <SeeAll />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5'>
        {recommendedRestaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            logo={restaurant.logo}
            name={restaurant.name}
            place={restaurant.place}
            restaurantId={restaurant.id}
            star={restaurant.star}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
