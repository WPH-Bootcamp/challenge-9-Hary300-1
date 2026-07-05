'use client';
import heroImage from '@/assets/images/hero-image.png';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

type SearchForm = {
  search: string;
};
const HomeHeroSection = () => {
  const { register, handleSubmit } = useForm<SearchForm>();

  const onSubmit = (data: SearchForm) => {
    console.log(data);
  };

  return (
    <section
      id='home-hero'
      className='relative flex items-center justify-center w-full h-162 lg:h-206.75 mt-[-64px] lg:-mt-20 max-w-360 mx-auto'
    >
      <Image
        src={heroImage}
        alt='burger image'
        loading='eager'
        fill
        className='object-cover object-center'
      />
      <div className='absolute inset-0 bg-linear-to-t from-black/80 to-transparent' />
      <div className='flex flex-col items-center gap-6 lg:gap-10 z-1 px-4 lg:px-30 '>
        <div>
          <h1 className='text-white font-extrabold text-display-lg lg:text-display-2xl text-center'>
            Explore Culinary Experiences
          </h1>
          <p className='text-white font-bold text-lg lg:text-display-xs text-center'>
            Search and refine your choice to discover the perfect restaurant.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='relative max-w-151 w-full'
        >
          <input
            type='text'
            {...register('search')}
            placeholder='Search restaurants, food and drink'
            className='w-full rounded-full py-2 px-4 bg-white placeholder:text-neutral-600 placeholder:text-sm lg:placeholder:text-md pl-12.5 outline-0 focus:placeholder:opacity-0'
          />
          <Search className='size-5 absolute top-1/2 -translate-y-1/2 left-6 text-neutral-500' />
        </form>
      </div>
    </section>
  );
};

export default HomeHeroSection;
