import SearchRestaurantGrid from '@/components/search/SearchRestaurantGrid';
import Loading from '@/components/shared/Loading';
import { Suspense } from 'react';

const SearchPage = () => {
  return (
    <div className='px-4 lg:px-30 pt-4 lg:pt-12 pb-26 lg:pb-45 bg-neutral-50 flex flex-col gap-4 lg:gap-8'>
      <div className='max-w-250 mx-auto w-full'>
        <h1 className='font-extrabold text-display-xs lg:text-display-md'>
          Search Result
        </h1>
      </div>
      <Suspense fallback={<Loading />}>
        <SearchRestaurantGrid />
      </Suspense>
    </div>
  );
};

export default SearchPage;
