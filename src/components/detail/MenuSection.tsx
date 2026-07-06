import { Menu } from '@/features/restaurant/types';
import MenuTabs from './MenuTabs';

const MenuSection = ({ menus }: { menus: Menu[] }) => {
  return (
    <div className='pt-4 flex flex-col gap-4 lg:gap-6 pb-20 lg:pb-28'>
      <h2 className='font-extrabold text-display-xs lg:text-display-lg'>
        Menu
      </h2>
      <MenuTabs menus={menus} />
    </div>
  );
};

export default MenuSection;
