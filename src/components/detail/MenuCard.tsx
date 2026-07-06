import { Menu } from '@/features/restaurant/types';
import Image from 'next/image';
import { Button } from '../ui/button';

const MenuCard = ({ menu }: { menu: Menu }) => {
  return (
    <div className='flex flex-col rounded-2xl gap-3 lg:gap-4 overflow-hidden pb-3 lg:pb-4 shadow-[0_0_20px_0_#CBCACA40]'>
      <div className='relative h-43 lg:h-71.25'>
        <Image
          src={menu.image}
          alt={menu.foodName}
          fill
          sizes='(max-width: 640px) 50vw,
         (max-width: 1280px) 33vw,
         25vw'
          className='object-cover object-center'
        />
      </div>
      <div className='flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center px-3 lg:px-4'>
        <div className='flex flex-col'>
          <p className='font-medium text-sm lg:text-md leading-sm'>
            {menu.foodName}
          </p>
          <p className='font-extrabold text-md lg:text-lg leading-md'>
            Rp {menu.price}
          </p>
        </div>
        <div className='w-full lg:max-w-19.75'>
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
