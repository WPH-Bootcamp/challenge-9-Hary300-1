'use client';
import { useGetAllRestaurantList } from '@/features/restaurant/hook/useGetAllRestaurantList';
import Loading from '../shared/Loading';
import CategoryGrid from './CategoryGrid';
import { EmptyData } from '../shared/EmptyData';
import { useSearchParams } from 'next/navigation';

const CategoryContent = () => {
  const searchParams = useSearchParams();
  const query = {
    location: searchParams.get('location') ?? undefined,
    range: searchParams.get('range')
      ? Number(searchParams.get('range'))
      : undefined,
    priceMin: searchParams.get('priceMin')
      ? Number(searchParams.get('priceMin'))
      : undefined,
    priceMax: searchParams.get('priceMax')
      ? Number(searchParams.get('priceMax'))
      : undefined,
    rating: searchParams.get('rating')
      ? Number(searchParams.get('rating'))
      : undefined,
    category: searchParams.get('category') ?? undefined,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : undefined,
    limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined,
  };

  const {
    data: restaurantsResponse,
    isLoading,
    error,
  } = useGetAllRestaurantList(query);

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
