import { Menu } from '@/features/restaurant/types';
import MenuCard from './MenuCard';

const MenuGrid = ({ menus }: { menus: Menu[] }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 w-full'>
      {menus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default MenuGrid;
