import { useGetMyOrder } from '@/features/order/hook/useMyOrders';
import { TransactionStatus } from '@/features/order/types';
import Loading from '@/components/shared/Loading';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MyOrderList from './MyOrderList';
import { EmptyData } from '@/components/shared/EmptyData';

const MyOrdersSection = () => {
  const [status, setStatus] = useState<TransactionStatus>('done');
  const { data: myOrderResponse, isLoading, error } = useGetMyOrder({ status });

  const myOrderData = myOrderResponse?.data.orders ?? [];

  const content = isLoading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : myOrderData.length > 0 ? (
    <MyOrderList orderData={myOrderData} />
  ) : (
    <EmptyData />
  );

  return (
    <section
      id='profile-my-order'
      className='flex flex-col gap-4 lg:gap-6 w-full'
    >
      <h1 className='font-extrabold text-display-xs lg:text-display-md'>
        My Order
      </h1>

      <Tabs
        value={status}
        onValueChange={(value) => setStatus(value as TransactionStatus)}
      >
        <TabsList className='flex gap-2 lg:gap-3'>
          <p className='font-bold text-sm lg:text-lg text-black'>Status</p>
          <TabsTrigger value='preparing'>Preparing</TabsTrigger>
          <TabsTrigger value='on_the_way'>On the Way</TabsTrigger>
          <TabsTrigger value='delivered'>Delivered</TabsTrigger>
          <TabsTrigger value='done'>Done</TabsTrigger>
          <TabsTrigger value='cancelled'>cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value='preparing'>{content}</TabsContent>
        <TabsContent value='on_the_way'>{content}</TabsContent>
        <TabsContent value='delivered'>{content}</TabsContent>
        <TabsContent value='done'>{content}</TabsContent>
        <TabsContent value='cancelled'>{content}</TabsContent>
      </Tabs>
    </section>
  );
};

export default MyOrdersSection;
