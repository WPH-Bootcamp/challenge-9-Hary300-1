'use client';
import { useGetAllRestaurantList } from '@/features/restaurant/hook/useGetAllRestaurantList';
import Loading from '../shared/Loading';
import CategoryGrid from './CategoryGrid';
import { EmptyData } from '../shared/EmptyData';
// import { useSearchParams } from 'next/navigation';

const CategoryContent = () => {
  // const searchParams = useSearchParams();
  // const category = searchParams.get('filter') ?? undefined;

  const {
    data: restaurantsResponse,
    isLoading,
    error,
  } = useGetAllRestaurantList({
    page: 1,
    limit: 20,
    // category,
  });

  if (isLoading)
    return (
      <div className='w-full'>
        <Loading />
      </div>
    );
  if (error) return <p>{error.message}</p>;
  const restaurants = restaurantsResponse?.data.restaurants;
  return (
    <div className='w-full'>
      {restaurants ? <CategoryGrid restaurants={restaurants} /> : <EmptyData />}
    </div>
  );
};

export default CategoryContent;
