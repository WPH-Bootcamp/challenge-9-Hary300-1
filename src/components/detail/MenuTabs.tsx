import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AllMenu from './MenuGrid';
import { Menu } from '@/features/restaurant/types';
import MenuGrid from './MenuGrid';

const MenuTabs = ({ menus }: { menus: Menu[] }) => {
  const foods = menus.filter((menu) => menu.type === 'food');
  const drinks = menus.filter((menu) => menu.type === 'drink');
  return (
    <Tabs defaultValue='all-menu' className='flex flex-col gap-4 lg:gap-6'>
      <TabsList className='flex gap-2 bg-transparent'>
        <TabsTrigger
          value='all-menu'
          className='rounded-full border data-active:bg-[#FFECEC] data-active:border-primary-100 data-active:text-primary-100 text-semibold data-active:font-bold'
        >
          All Menu
        </TabsTrigger>
        <TabsTrigger
          value='food'
          className='rounded-full border data-active:bg-[#FFECEC] data-active:border-primary-100 data-active:text-primary-100 text-semibold data-active:font-bold'
        >
          Food
        </TabsTrigger>
        <TabsTrigger
          value='drink'
          className='rounded-full border data-active:bg-[#FFECEC] data-active:border-primary-100 data-active:text-primary-100 text-semibold data-active:font-bold'
        >
          Drink
        </TabsTrigger>
      </TabsList>
      <TabsContent value='all-menu'>
        <MenuGrid menus={menus} />
      </TabsContent>
      <TabsContent value='food'>
        <MenuGrid menus={foods} />
      </TabsContent>
      <TabsContent value='drink'>
        <MenuGrid menus={drinks} />
      </TabsContent>
    </Tabs>
  );
};

export default MenuTabs;
