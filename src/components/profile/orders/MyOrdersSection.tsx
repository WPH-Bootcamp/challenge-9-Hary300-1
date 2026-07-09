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
      className='flex flex-col gap-4 lg:gap-6 w-full overflow-hidden'
    >
      <h1 className='font-extrabold text-display-xs lg:text-display-md'>
        My Order
      </h1>

      <Tabs
        value={status}
        onValueChange={(value) => setStatus(value as TransactionStatus)}
      >
        <div className='flex gap-2 lg:gap-3 items-center'>
          <p className='font-bold text-sm lg:text-lg text-black'>Status</p>
          <div className='overflow-x-auto overflow-y-hidden scrollbar-none'>
            <TabsList className='flex gap-2 lg:gap-3'>
              <TabsTrigger value='preparing' variant='red'>
                Preparing
              </TabsTrigger>
              <TabsTrigger value='on_the_way' variant='red'>
                On the Way
              </TabsTrigger>
              <TabsTrigger value='delivered' variant='red'>
                Delivered
              </TabsTrigger>
              <TabsTrigger value='done' variant='red'>
                Done
              </TabsTrigger>
              <TabsTrigger value='cancelled' variant='red'>
                cancelled
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

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
