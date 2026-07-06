import { Review } from '@/features/restaurant/types';
import ReviewCard from './ReviewCard';

const ReviewGrid = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-2'>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewGrid;
