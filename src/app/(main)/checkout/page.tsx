'use client';

import {
  useDeleteAllItemsCart,
  useGetItemsCart,
} from '@/features/cart/hook/useCart';
import CartList from '@/components/cart/CartList';
import { FormProvider, useForm } from 'react-hook-form';
import {
  CheckoutForm,
  checkoutSchema,
} from '@/features/order/schema/checkoutSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { mapCartToCheckoutRestaurants } from '@/lib/mappers/checkouts';
import { CheckoutPayload } from '@/features/order/types';
import { useAddOrderCheckout } from '@/features/order/hook/useCheckout';
import DeliveryAddressSection from '@/components/checkout/DeliveryAddressSection';
import { useEffect } from 'react';
import PaymentMethodSummary from '@/components/checkout/Payment';
import Loading from '@/components/shared/Loading';
import { useRouter } from 'next/navigation';

type SavedAddress = {
  deliveryAddress: string;
  phone: string;
};

const CheckoutPage = () => {
  const { data: cartResponse, isLoading, error } = useGetItemsCart();
  const { mutate: deleteAllItems } = useDeleteAllItemsCart();
  const { mutate } = useAddOrderCheckout();

  const methods = useForm<CheckoutForm>({
    defaultValues: {
      deliveryAddress: '',
      phone: '',
      paymentMethod: 'Bank Negara Indonesia',
      notes: '',
    },
    resolver: zodResolver(checkoutSchema),
  });
  const router = useRouter();
  useEffect(() => {
    const saved = localStorage.getItem('address');

    if (!saved) return;

    const data: SavedAddress = JSON.parse(saved);

    methods.reset({
      ...methods.getValues(),
      deliveryAddress: data.deliveryAddress,
      phone: data.phone,
    });
  }, [methods]);

  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  const cartRestaurants = cartResponse?.data.cart ?? [];
  const summary = cartResponse?.data.summary;

  const onSubmit = (data: CheckoutForm) => {
    const payload: CheckoutPayload = {
      ...data,
      restaurants: mapCartToCheckoutRestaurants(cartRestaurants),
    };

    mutate(payload, {
      onSuccess: () => {
        router.push('/success');
        deleteAllItems();
      },
    });
  };

  return (
    <div className='px-4 lg:px-30 pt-4 lg:pt-12 pb-10 lg:pb-25 bg-neutral-50 flex flex-col gap-4 lg:gap-8'>
      <div className='max-w-250 mx-auto w-full'>
        <h1 className='font-extrabold text-display-xs lg:text-display-md'>
          Checkout
        </h1>
      </div>

      <FormProvider {...methods}>
        <form
          className='flex flex-col gap-4 lg:flex-row lg:gap-5  max-w-250 mx-auto w-full'
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-4 lg:gap-5 w-full'>
            <DeliveryAddressSection />

            <CartList cartRestaurants={cartRestaurants} className='bg-white' />
          </div>

          <PaymentMethodSummary summary={summary} />
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutPage;
