'use client';
import CategoryGrid from './CategoryGrid';
import { EmptyData } from '../shared/EmptyData';
import Loading from '../shared/Loading';
import { useGetBestSellerRestaurants } from '@/features/restaurant/hook/useGetBestSellerRestaurant';

const BestSellerRestaurants = () => {
  const bestSellerQuery = {
    limit: 4,
  };

  const {
    data: bestSellerRestaurantsResponse,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetBestSellerRestaurants(bestSellerQuery);

  if (isLoading)
    return (
      <div className='w-full'>
        <Loading />
      </div>
    );

  if (error) return <p>{error.message}</p>;
  const restaurants =
    bestSellerRestaurantsResponse?.pages.flatMap(
      (page) => page.data.restaurants
    ) ?? [];
  console.log('Best seller');
  return (
    <div className='w-full'>
      {restaurants.length > 0 ? (
        <CategoryGrid
          restaurants={restaurants}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      ) : (
        <EmptyData />
      )}
    </div>
  );
};

export default BestSellerRestaurants;
