import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/button';
import { CheckoutForm } from '@/features/order/schema/checkoutSchema';

type PaymentSummaryProps = {
  totalPriceBeforeFee: number;
  totalItems: number;
  deliveryFee?: number;
  serviceFee?: number;
};

const PaymentSummary = ({
  totalPriceBeforeFee,
  totalItems,
  deliveryFee = 0,
  serviceFee = 0,
}: PaymentSummaryProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<CheckoutForm>();

  const totalPriceAfterFee = totalPriceBeforeFee + deliveryFee + serviceFee;

  const summaryItems = [
    {
      label: `Price (${totalItems} item(s))`,
      value: totalPriceBeforeFee,
    },
    {
      label: 'Delivery Fee',
      value: deliveryFee,
    },
    {
      label: 'Service Fee',
      value: serviceFee,
    },
    {
      label: 'Total Price',
      value: totalPriceAfterFee,
    },
  ];

  return (
    <div className='relative flex flex-col gap-4 p-4 lg:p-5 rounded-b-2xl shadow-[0_0_20px_0_#CBCACA40] bg-white'>
      <div>
        <h3 className='font-extrabold text-md lg:text-lg'>Payment Summary</h3>
      </div>
      {summaryItems.map((item) => (
        <div key={item.label} className='flex justify-between items-center'>
          <p className='font-medium text-sm lg:text-md'>{item.label}</p>

          <p className='font-bold text-sm lg:text-md'>
            Rp{item.value.toLocaleString('id-ID')}
          </p>
        </div>
      ))}
      <div>
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Loading' : 'Buy'}
        </Button>
      </div>
    </div>
  );
};

export default PaymentSummary;
