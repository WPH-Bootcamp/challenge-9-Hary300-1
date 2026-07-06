import { Review } from '@/features/restaurant/types';
import { Star } from 'lucide-react';
import ReviewGrid from './ReviewGrid';

const ReviewSection = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className='pt-4 pb-[96px] lg:pt-8 lg:pb-30 flex flex-col gap-4 lg:gap-6'>
      <div className='flex flex-col gap-2 lg:gap-3'>
        <h2 className='font-extrabold text-display-xs lg:text-display-lg'>
          Review
        </h2>
        <div className='flex gap-1 items-center'>
          <Star className='text-[#FFAB0D] fill-[#FFAB0D] size-6' />
          <p className='font-extrabold text-md lg:text-xl'>
            5 ({reviews.length} Ulasan)
          </p>
        </div>
      </div>
      <ReviewGrid reviews={reviews} />
    </div>
  );
};

export default ReviewSection;
