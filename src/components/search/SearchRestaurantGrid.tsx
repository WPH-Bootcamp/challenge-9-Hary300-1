'use client';
import RestaurantCard from '../shared/RestaurantCard';
import { EmptyData } from '../shared/EmptyData';
import { useSearchParams } from 'next/navigation';
import { useSearchRestaurant } from '@/features/restaurant/hook/useSearchRestaurant';
import Loading from '../shared/Loading';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Search } from 'lucide-react';

type SearchForm = {
  search: string;
};

const SearchRestaurantGrid = () => {
  const { register, handleSubmit } = useForm<SearchForm>();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const [q, setQ] = useState(query);
  const {
    data: restaurantsResponse,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchRestaurant({ q });

  if (error) return <p>{error.message}</p>;

  const onSubmit = (query: SearchForm) => {
    const { search } = query;
    setQ(search);
  };

  const restaurants =
    restaurantsResponse?.pages.flatMap((page) => page.data.restaurants) ?? [];

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative max-w-100 w-full -mt-4 shadow-[0_0_20px_0_#CBCACA40] rounded-full'
      >
        <input
          type='text'
          {...register('search')}
          placeholder="Type the restaurant's name"
          className='w-full rounded-full py-2 px-4 bg-white placeholder:text-neutral-600 placeholder:text-sm lg:placeholder:text-md pl-12.5 outline-0 focus:placeholder:opacity-0'
        />
        <Search className='size-5 absolute top-1/2 -translate-y-1/2 left-6 text-neutral-500' />
      </form>
      {isLoading ? (
        <Loading />
      ) : restaurants.length === 0 ? (
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
      )}
    </>
  );
};

export default SearchRestaurantGrid;
