import { Menu } from '@/features/restaurant/types';

/**=============
 * Cart
 ===============*/
export type AddToCartPayload = {
  restaurantId: number;
  menuId: number;
  quantity: number;
};

export type UpdateCartItemPayload = {
  cartId: number;
  quantity: number;
};

export type CartRestaurant = {
  id: number;
  name: string;
  logo: string;
};

export type CartItem = {
  id: number;
  menu: Menu;
  quantity: number;
  itemTotal: number;
};

export type Cart = {
  restaurant: CartRestaurant;
  items: CartItem[];
  subtotal: number;
};

export type CartSummary = {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
};

export type CartData = {
  cart: Cart[];
  summary: CartSummary;
};
