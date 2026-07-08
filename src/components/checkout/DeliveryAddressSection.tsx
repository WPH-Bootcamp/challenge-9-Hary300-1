'use client';
import Image from 'next/image';
import addressIcon from '@/assets/icons/category/location.png';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '../ui/field';
import { Label } from '../ui/label';
import { useFormContext } from 'react-hook-form';
import { CheckoutForm } from '@/features/order/schema/checkoutSchema';
import { Input } from '../ui/input';

const DeliveryAddressSection = () => {
  const { register, watch } = useFormContext<CheckoutForm>();
  const deliveryAddress = watch('deliveryAddress');
  const phone = watch('phone');

  const handleSaveDeliveryAddress = () => {
    const data = { deliveryAddress, phone };
    localStorage.setItem('address', JSON.stringify(data));
  };

  return (
    <div className='flex flex-col gap-4 lg:gap-5 rounded-2xl p-4 shadow-[0_0_20px_0_#CBCACA40] bg-white'>
      <div>
        <div className='flex gap-2 items-center'>
          <Image
            src={addressIcon}
            alt='address icon'
            className='w-6 h-6 lg:w-8 lg:h-8'
          />
          <h3 className='font-extrabold text-md lg:text-lg'>
            Delivery Address
          </h3>
        </div>
        <p className='font-medium text-sm lg:text-md'>{deliveryAddress}</p>
        <p className='font-medium text-sm lg:text-md'>{phone}</p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <div className='max-w-30'>
            <Button
              type='button'
              variant='outline'
              className='text-neutral-950 h-9 lg:h-10'
            >
              Change
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Address</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor='deliveryAddress'>Address</Label>
              <Input id='deliveryAddress' {...register('deliveryAddress')} />
            </Field>
            <Field>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input id='phone' {...register('phone')} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline' className='text-neutral-950'>
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={handleSaveDeliveryAddress}>Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeliveryAddressSection;
