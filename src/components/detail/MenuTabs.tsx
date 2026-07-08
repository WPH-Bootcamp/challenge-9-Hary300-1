import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RestaurantDetail } from '@/features/restaurant/types';
import MenuGrid from './MenuGrid';

const MenuTabs = ({
  restaurantDetail,
}: {
  restaurantDetail: RestaurantDetail;
}) => {
  const restaurantId = restaurantDetail.id;
  const menus = restaurantDetail.menus;
  const foods = menus.filter((menu) => menu.type === 'food');
  const drinks = menus.filter((menu) => menu.type === 'drink');
  return (
    <Tabs defaultValue='all-menu' className='flex flex-col gap-4 lg:gap-6'>
      <TabsList className='flex gap-2 bg-transparent'>
        <TabsTrigger value='all-menu'>All Menu</TabsTrigger>
        <TabsTrigger value='food'>Food</TabsTrigger>
        <TabsTrigger value='drink'>Drink</TabsTrigger>
      </TabsList>
      <TabsContent value='all-menu'>
        <MenuGrid restaurantId={restaurantId} menus={menus} />
      </TabsContent>
      <TabsContent value='food'>
        <MenuGrid restaurantId={restaurantId} menus={foods} />
      </TabsContent>
      <TabsContent value='drink'>
        <MenuGrid restaurantId={restaurantId} menus={drinks} />
      </TabsContent>
    </Tabs>
  );
};

export default MenuTabs;
