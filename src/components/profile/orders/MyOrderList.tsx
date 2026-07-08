import { Order } from '@/features/order/types';
import MyOrderCard from './MyOrderCard';

type MyOrderListProps = {
  orderData: Order[];
};
const MyOrderList = ({ orderData }: MyOrderListProps) => {
  console.log(orderData);
  return (
    <div className='flex flex-col gap-5'>
      {orderData.map((order) => (
        <MyOrderCard
          key={order.id}
          order={order}
          totalPrice={order.pricing.totalPrice}
        />
      ))}
    </div>
  );
};

export default MyOrderList;
