import { Order } from '@/features/order/types';
import Image from 'next/image';
import restaurantIcon from '@/assets/icons/restaurant-icon.png';
import GiveReviewButton from './GiveReviewButton';

type MyOrderCardProps = {
  order: Order;
  totalPrice: number;
};
const MyOrderCard = ({ order, totalPrice }: MyOrderCardProps) => {
  const restaurants = order.restaurants;
  return restaurants.map((restaurant) => {
    const items = restaurant.items;
    const menuIds = items.flatMap((item) => item.menuId);
    return (
      <div
        key={restaurant.restaurant.id}
        className='rounded-2xl p-4 lg:p-5 flex flex-col gap-3 lg;gap-4 shadow-[0_0_20px_0_#CBCACA40] bg-white'
      >
        <div className='flex gap-2 items-center'>
          <Image
            src={restaurantIcon}
            alt='restaurant icon'
            className='w-8 h-8'
          />
          <p className='font-bold text-sm lg:text-lg'>
            {restaurant.restaurant.name}
          </p>
        </div>
        {items.map((item) => (
          <div key={item.menuId} className='flex gap-3 lg:gap-4.5 items-center'>
            <Image
              src={item.image}
              alt='menu image'
              width={80}
              height={80}
              loading='eager'
              className='w-16 h-16 lg:w-20 lg:h-20 rounded-xl object-center object-cover'
            />
            <div className='flex flex-col '>
              <p className='font-medium text-sm lg:text-md'>{item.menuName}</p>
              <p className='font-extrabold text-md'>
                {item.quantity} x {item.price}
              </p>
            </div>
          </div>
        ))}
        <div className='border-t-2 border-dashed border-t-neutral-300' />
        <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
          <div className='flex flex-col '>
            <p className='font-medium text-sm lg:text-md'>Total</p>
            <p className='font-extrabold text-md text-xl'>
              Rp{totalPrice.toLocaleString('id-ID')}
            </p>
          </div>
          <GiveReviewButton
            transactionId={order.transactionId}
            menuIds={menuIds}
            restaurantId={restaurant.restaurant.id}
          />
        </div>
      </div>
    );
  });
};

export default MyOrderCard;
