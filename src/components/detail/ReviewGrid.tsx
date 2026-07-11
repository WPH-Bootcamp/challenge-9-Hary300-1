'use client';
import ReviewCard from './ReviewCard';
import { Star } from 'lucide-react';
import { useGetAllReviewsRestaurant } from '@/features/review/hook/useReview';
import Loading from '../shared/Loading';
import { Button } from '../ui/button';

type ReviewGridProps = {
  restaurantId: number;
};

const ReviewGrid = ({ restaurantId }: ReviewGridProps) => {
  const {
    data: reviewsResponse,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetAllReviewsRestaurant({
    restaurantId: restaurantId,
    limit: 4,
  });

  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  const reviews =
    reviewsResponse?.pages.flatMap((page) => page.data.reviews) ?? [];

  const fiveStarReviews = reviews.filter((review) => review.star === 5).length;

  return (
    <>
      <div className='flex gap-1 items-center -mt-1 lg:-mt-3'>
        <Star className='text-[#FFAB0D] fill-[#FFAB0D] size-6' />
        <p className='font-extrabold text-md lg:text-xl'>
          5 ({fiveStarReviews} Ulasan)
        </p>
      </div>
      <div className='relative grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-2'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            restaurantId={restaurantId}
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
    </>
  );
};

export default ReviewGrid;
