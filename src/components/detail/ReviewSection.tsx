import ReviewGrid from './ReviewGrid';

type ReviewSectionProps = {
  restaurantId: number;
};

const ReviewSection = ({ restaurantId }: ReviewSectionProps) => {
  return (
    <div className='pt-4 pb-[96px] lg:pt-8 lg:pb-30 flex flex-col gap-4 lg:gap-6'>
      <h2 className='font-extrabold text-display-xs lg:text-display-lg'>
        Review
      </h2>

      <ReviewGrid restaurantId={restaurantId} />
    </div>
  );
};

export default ReviewSection;
