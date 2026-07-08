'use client';
import Logo from '@/components/shared/Logo';
import Image from 'next/image';
import successIcon from '@/assets/icons/success-icon.svg';
import { useQueryClient } from '@tanstack/react-query';
import { Order } from '@/features/order/types';
import DashedLine from '@/components/shared/DashedLine';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const transaction = queryClient.getQueryData<Order>(['last-checkout']);

  useEffect(() => {
    if (!transaction) {
      router.replace('/profile?page=orders');
    }
  }, [transaction, router]);

  if (!transaction) {
    return <div>Redirecting...</div>;
  }
  const payment = transaction?.paymentMethod;
  const subTotal = transaction?.pricing.subtotal;
  const totalPrice = transaction?.pricing.totalPrice;
  const deliveryFee = transaction?.pricing.deliveryFee;
  const serviceFee = transaction?.pricing.serviceFee;
  const totalItems = transaction?.restaurants;
  const totalQuantity =
    totalItems?.reduce(
      (restaurantTotal, restaurant) =>
        restaurantTotal +
        restaurant.items.reduce(
          (itemTotal, item) => itemTotal + item.quantity,
          0
        ),
      0
    ) ?? 0;

  const transactionDetails = [
    {
      label: 'Date',
      value: '25 August 2025, 15:51',
    },
    {
      label: 'Payment Method',
      value: payment,
    },
    {
      label: `Subtotal (${totalQuantity} items)`,
      value: `Rp${subTotal.toLocaleString('id-ID')}`,
    },
    {
      label: 'Delivery Fee',
      value: `Rp${deliveryFee.toLocaleString('id-ID')}`,
    },
    {
      label: 'Service Fee',
      value: `Rp${serviceFee.toLocaleString('id-ID')}`,
    },
  ];

  const handleSeeMyOrderClick = () => {
    router.replace('/profile?page=orders');
  };

  return (
    <div className='bg-neutral-50 h-screen flex justify-center items-center px-4 lg:px-30'>
      <div className='max-w-107 mx-auto w-full flex flex-col items-center'>
        <Logo logoColor='red' textColor='dark' stayVisibleText />

        <div className='rounded-t-2xl bg-white shadow-[0_0_20px_0_#CBCACA40] p-4 flex flex-col items-center gap-4 lg:p-5 mt-7 w-full'>
          <Image src={successIcon} alt='success icon' className='w-16 h-16' />
          <p className='font-extrabold text-lg lg:text-xl'>Payment Success</p>
          <p className='text-sm lg:text-md'>
            Your payment has been successfully processed.
          </p>
        </div>
        <DashedLine />
        <div className='p-4 lg:p-5 w-full flex flex-col gap-4 bg-white shadow-[0_0_20px_0_#CBCACA40]'>
          {transactionDetails.map((item) => (
            <div
              key={item.label}
              className='flex justify-between items-center w-full'
            >
              <p className='font-medium text-sm lg:text-md'>{item.label}</p>

              <p className='font-bold text-sm lg:text-md'>{item.value}</p>
            </div>
          ))}
        </div>
        <DashedLine />
        <div className='w-full p-4 lg:p-5 flex flex-col gap-4 bg-white shadow-[0_0_20px_0_#CBCACA40] rounded-b-2xl'>
          <div className='flex justify-between items-center w-full'>
            <p className='font-medium text-md lg:text-lg'>Total</p>

            <p className='font-extrabold text-md lg:text-lg'>
              Rp{totalPrice.toLocaleString('id-ID')}
            </p>
          </div>
          <Button onClick={handleSeeMyOrderClick}>See My Order</Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
