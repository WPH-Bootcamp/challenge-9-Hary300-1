export type TransactionStatus =
  | 'preparing'
  | 'on_the_way'
  | 'delivered'
  | 'done'
  | 'cancelled';

export type Pricing = {
  subtotal: number;
  serviceFee: number;
  deliveryFee: number;
  totalPrice: number;
};

export type Restaurant = {
  id: number;
  name: string;
  logo: string;
};

export type OrderItem = {
  menuId: number;
  menuName: string;
  price: number;
  image: string;
  quantity: number;
  itemTotal: number;
};

export type OrderRestaurant = {
  restaurant: Restaurant;
  items: OrderItem[];
  subtotal: number;
};

export type OrderFilter = {
  status: TransactionStatus;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type Order = {
  id: number;
  transactionId: string;
  status: TransactionStatus;
  paymentMethod: string;
  deliveryAddress: string;
  phone: string;
  pricing: Pricing;
  restaurants: OrderRestaurant[];
  createdAt: string;
  updatedAt: string;
};

export type GetMyOrdersData = {
  orders: Order[];
  pagination: Pagination;
  filter: OrderFilter;
};

/**=============
 * Payload
 ===============*/

export type CheckoutItem = {
  menuId: number;
  quantity: number;
};
export type CheckoutRestaurant = {
  restaurantId: number;
  items: CheckoutItem[];
};

export type CheckoutPayload = {
  restaurants: CheckoutRestaurant[];
  deliveryAddress: string;
  phone: string;
  paymentMethod: string;
  notes?: string;
};

/**=============
 * Transaction
 ===============*/

export type TransactionData = {
  transaction: Order;
};
