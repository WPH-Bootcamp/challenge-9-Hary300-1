import { Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type RestaurantCardProps = {
  restaurantId: number;
  logo: string;
  name: string;
  star: number;
  place: string;
};

const RestaurantCard = ({
  restaurantId,
  logo,
  name,
  star,
  place,
}: RestaurantCardProps) => {
  const router = useRouter();
  const handleDetailClick = (restaurantId: number) => {
    router.push(`/resto/${restaurantId}`);
  };
  return (
    <div className='rounded-2xl p-3 w-full flex gap-2 lg:p-4 shadow-[0_0_20px_#CBCACA40] items-center'>
      <div className='relative w-22.5 h-22.5 rounded-xl overflow-hidden'>
        <Image
          src={logo}
          alt={`${name} image`}
          fill
          loading='eager'
          className='object-cover'
          unoptimized
          referrerPolicy='no-referrer'
        />
      </div>

      <div>
        <p
          className='font-bold text-md lg:text-lg cursor-pointer hover:underline'
          onClick={() => handleDetailClick(restaurantId)}
        >
          {name}
        </p>
        <div className='flex gap-0.5 lg:gap-1'>
          <Star className='text-[#FFAB0D] fill-[#FFAB0D] size-6' />
          <p className='font-medium text-sm lg:text-md'>{star}</p>
        </div>
        <p className='text-sm lg:text-md'>{place}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
