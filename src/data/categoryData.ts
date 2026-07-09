import allRestaurant from '@/assets/icons/category/all-food.png';
import nearby from '@/assets/icons/category/location.png';
import discount from '@/assets/icons/category/discount.png';
import bestSeller from '@/assets/icons/category/best-seller.png';
import delivery from '@/assets/icons/category/delivery.png';
import lunch from '@/assets/icons/category/lunch.png';

export const categories = [
  {
    id: 1,
    title: 'All Restaurant',
    filter: '',
    icon: allRestaurant,
  },
  {
    id: 2,
    title: 'Nearby',
    filter: 'nearby',
    icon: nearby,
  },
  {
    id: 3,
    title: 'Discount',
    filter: 'discount',
    icon: discount,
  },
  {
    id: 4,
    title: 'Best Seller',
    filter: 'best_seller',
    icon: bestSeller,
  },
  {
    id: 5,
    title: 'Delivery',
    filter: 'delivery',
    icon: delivery,
  },
  {
    id: 6,
    title: 'Lunch',
    filter: 'lunch',
    icon: lunch,
  },
];
