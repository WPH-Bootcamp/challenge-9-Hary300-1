import { paymentMethods } from '@/data/paymentMethods';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Controller, useFormContext } from 'react-hook-form';
import { Label } from '../ui/label';
import Image from 'next/image';
import { CheckoutForm } from '@/features/order/schema/checkoutSchema';

const PaymentMethod = () => {
  const { control } = useFormContext<CheckoutForm>();
  return (
    <div className='flex flex-col gap-4 p-4 lg:p-5 rounded-t-2xl shadow-[0_0_20px_0_#CBCACA40] bg-white'>
      <div>
        <h3 className='font-extrabold text-md lg:text-lg'>Payment Method</h3>
      </div>
      <Controller
        name='paymentMethod'
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className='divide-y'
          >
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className='flex justify-between items-center pb-3 lg:pb-4'
              >
                <div className='flex gap-2 w-full'>
                  <div className='w-11 h-10 rounded-lg border flex items-center justify-center px-1.25'>
                    <Image
                      src={method.logoUrl}
                      alt={`${method.name} logo`}
                      className='w-7.5 h-auto'
                    />
                  </div>

                  <Label htmlFor={method.id} className='w-full'>
                    {method.name}
                  </Label>
                </div>
                <RadioGroupItem id={method.id} value={method.name} />
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
};

export default PaymentMethod;
