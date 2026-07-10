import { Review } from '@/features/restaurant/types';
import { formatDate } from '@/lib/helper/formateDate';
import { Star } from 'lucide-react';
import Avatar from '../shared/Avatar';

const ReviewCard = ({ review }: { review: Review }) => {
  const avatar = review.user.avatar;
  const date = formatDate(review.createdAt);

  return (
    <div className='rounded-2xl p-4 gap-4 flex flex-col shadow-[0_0_20px_0_#CBCACA40]'>
      <div className='flex gap-4'>
        <Avatar avatar={avatar} size='lg' />
        <div className='flex flex-col'>
          <p className='font-extrabold text-md lg:text-lg'>
            {review.user.name}
          </p>
          <p>{date}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex'>
          {Array.from({ length: review.star }).map((_, index) => (
            <Star
              key={index}
              className='text-[#FFAB0D] fill-[#FFAB0D] size-6'
            />
          ))}
        </div>
        <p className='text-sm leading-sm lg:text-md lg:leading-md'>
          {review.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
