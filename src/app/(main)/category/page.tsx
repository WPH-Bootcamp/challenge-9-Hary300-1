import CategoryContent from '@/components/category/CategoryContent';
import MobileFilter from '@/components/category/MobileFilter';
import SideBarFilter from '@/components/category/SideBarFilter';
import Loading from '@/components/shared/Loading';
import { Suspense } from 'react';

const CategoryPage = () => {
  return (
    <div className='pt-4 pb-10 lg:pt-12 lg:pb-25 flex flex-col gap-4 lg:gap-8 px-4 lg:px-30'>
      <h2 className='font-extrabold text-display-xs lg:text-display-md'>
        All Restaurant
      </h2>
      <Suspense fallback={<Loading />}>
        <div className='flex flex-col lg:flex-row gap-10'>
          <MobileFilter />
          <SideBarFilter />
          <CategoryContent />
        </div>
      </Suspense>
    </div>
  );
};

export default CategoryPage;
