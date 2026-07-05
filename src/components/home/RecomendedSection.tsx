import { useRecommendedRestaurant } from '@/features/restaurant/hook/useRecommendedRestaurant';
import { pressable } from '@/motions';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const RecommendedSection = () => {
  const { data: recommendedResponse } = useRecommendedRestaurant();
  console.log(recommendedResponse);
  const recommendedRestaurants = recommendedResponse?.data.recommendations;

  return (
    <section
      id='home-recommendation'
      className='flex flex-col gap-7 lg:gap-8 px-4 lg:px-30'
    >
      <h2 className='font-extrabold text-display-xs lg:text-display-md '>
        Recommended
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5'>
        {recommendedRestaurants?.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            className='rounded-2xl p-3 w-full flex gap-2 shadow-[0_0_20px_#CBCACA40]'
          >
            <div className='relative w-22.5 h-22.5 rounded-xl overflow-hidden'>
              <Image
                src={restaurant.logo}
                alt={`${restaurant.name} image`}
                fill
                className='object-cover'
                unoptimized
                referrerPolicy='no-referrer'
              />
            </div>

            <div>
              <p className='font-bold text-md lg:text-lg cursor-pointer hover:underline'>
                {restaurant.name}
              </p>
              <div className='flex gap-0.5 lg:gap-1'>
                <Star className='text-[#FFAB0D] fill-[#FFAB0D] size-6' />
                <p className='font-medium text-sm lg:text-md'>
                  {restaurant.star}
                </p>
              </div>
              <p className='text-sm lg:text-md'>{restaurant.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
