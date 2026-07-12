import allRestaurant from '@/assets/icons/category/all-food.png';
import nearby from '@/assets/icons/category/location.png';
import discount from '@/assets/icons/category/discount.png';
import bestSeller from '@/assets/icons/category/best-seller.png';
import delivery from '@/assets/icons/category/delivery.png';
import lunch from '@/assets/icons/category/lunch.png';
import { StaticImageData } from 'next/image';

export type RestaurantQuery = {
  location?: string;
  range?: string;
  priceMin?: string;
  priceMax?: string;
  rating?: string;
  category?: string;
  page?: string;
  limit?: string;
};

export type RestaurantMode = 'all' | 'nearby' | 'best-seller';

export type Category = {
  id: number;
  title: string;
  mode: RestaurantMode;
  icon: StaticImageData;
  query?: RestaurantQuery;
};

export const categories: Category[] = [
  {
    id: 1,
    title: 'All Restaurant',
    mode: 'all',
    icon: allRestaurant,
  },
  {
    id: 2,
    title: 'Nearby',
    mode: 'nearby',
    icon: nearby,
  },
  {
    id: 3,
    title: 'Discount',
    mode: 'all',
    query: {
      category: 'discount',
    },
    icon: discount,
  },
  {
    id: 4,
    title: 'Best Seller',
    mode: 'best-seller',
    icon: bestSeller,
  },
  {
    id: 5,
    title: 'Delivery',
    mode: 'all',
    query: {
      category: 'delivery',
    },
    icon: delivery,
  },
  {
    id: 6,
    title: 'Lunch',
    mode: 'all',
    query: {
      category: 'lunch',
    },
    icon: lunch,
  },
];
