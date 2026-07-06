import { RestaurantDetail } from '@/features/restaurant/types';
import { Share2, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

const DetailHeroSection = ({
  restaurantDetail,
}: {
  restaurantDetail: RestaurantDetail;
}) => {
  return (
    <div className='py-4 lg:pt-12 lg:pb-8 flex flex-col gap-8'>
      <div className='grid grid-cols-[3fr_1fr_1fr] gap-5'>
        <div className='hidden lg:block relative row-span-2'>
          <Image
            src={restaurantDetail.images[0]}
            alt='banner-1'
            loading='eager'
            fill
            sizes='(max-width: 768px) 100vw, 200px'
            className='object-cover object-center rounded-2xl'
          />
        </div>

        <div className='hidden lg:block col-span-2 relative h-75.5'>
          <Image
            src={restaurantDetail.images[1]}
            alt='banner-2'
            loading='eager'
            fill
            sizes='(max-width: 768px) 66vw, 150px'
            className='object-cover object-top rounded-2xl'
          />
        </div>

        <div className='hidden lg:block relative h-37'>
          <Image
            src={restaurantDetail.images[2]}
            alt='banner-3'
            loading='eager'
            fill
            sizes='(max-width: 768px) 33vw, 150px'
            className='object-cover object-top rounded-2xl'
          />
        </div>

        <div className='hidden lg:block relative h-37'>
          <Image
            src={restaurantDetail.images[3]}
            alt='banner-3'
            loading='eager'
            fill
            sizes='(max-width: 768px) 33vw, 150px'
            className='object-cover object-top rounded-2xl'
          />
        </div>
        <div className='col-span-3 w-full flex justify-between items-center'>
          <div className='flex gap-2 items-center '>
            <div className='relative w-22.5 h-22.5 rounded-xl overflow-hidden'>
              <Image
                src={restaurantDetail.logo}
                alt={`${restaurantDetail.name} image`}
                fill
                className='object-cover'
                unoptimized
                referrerPolicy='no-referrer'
              />
            </div>

            <div>
              <p className='font-extrabold text-md lg:text-display-md'>
                {restaurantDetail.name}
              </p>
              <div className='flex gap-0.5 lg:gap-1 items-center'>
                <Star className='text-[#FFAB0D] fill-[#FFAB0D] size-6' />
                <p className='font-medium text-sm lg:font-semibold lg:text-lg'>
                  {restaurantDetail.star}
                </p>
              </div>
              <p className='lg:font-medium text-sm lg:text-lg'>
                {restaurantDetail.place}
              </p>
            </div>
          </div>

          <Button
            variant='outline'
            className='text-neutral-950 rounded-full w-11 h-11 aspect-square lg:w-11xl'
          >
            <Share2 />
            <p className='font-bold  text-md hidden lg:block'>Share</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailHeroSection;
