'use client';
import { categories, Category, RestaurantQuery } from '@/data/categoryData';
import Image from 'next/image';
import { motion } from 'motion/react';
import { pressable } from '@/motions';
import { useRouter, useSearchParams } from 'next/navigation';

const CategorySection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (category: Category) => {
    const params = new URLSearchParams(searchParams);
    params.set('mode', category.mode);

    params.delete('category');
    params.delete('location');
    params.delete('priceMin');
    params.delete('priceMax');
    params.delete('rating');

    if (category.query) {
      Object.entries(category.query).forEach(([key, value]) => {
        params.set(key, value);
      });
    }
    if (category.mode === 'nearby') {
      params.delete('page');

      if (!params.has('range')) {
        params.set('range', '10');
      }
    }

    if (category.mode === 'best-seller') {
      params.delete('range');
      params.delete('page');
    }

    router.push(`/resto?${params.toString()}`);
  };

  return (
    <section
      id='home-category'
      className='flex flex-wrap justify-center xl:justify-between gap-5 xl:gap-0 px-4 lg:px-30 cursor-pointer'
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          className='flex flex-col gap-1 lg:gap-1.5 w-full max-w-29 lg:max-w-40.25 items-center'
          onClick={() => handleCategoryClick(category)}
          {...pressable}
        >
          <div className='flex justify-center items-center rounded-2xl shadow-[0_0_20px_#CBCACA40] h-25 w-full'>
            <Image src={category.icon} alt={`${category.title} image`} />
          </div>
          <p className='font-bold text-sm lg:text-lg text-center'>
            {category.title}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default CategorySection;
