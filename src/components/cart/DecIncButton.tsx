import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';
import {
  useDeleteOneItemCart,
  useUpdateItemCart,
} from '@/features/cart/hook/useCart';

type DecIncProps = {
  cartItemId: number;
  quantity: number;
};

const DecIncButton = ({ cartItemId, quantity }: DecIncProps) => {
  const { mutate: changeQuantity, isPending: isUpdating } = useUpdateItemCart();
  const { mutate: deleteOneItem, isPending: isDeleting } =
    useDeleteOneItemCart();

  const handleDecClick = () => {
    if (quantity <= 1) {
      deleteOneItem(cartItemId);
      return;
    }
    changeQuantity({ cartItemId, quantity: quantity - 1 });
  };

  const handleIncClick = () => {
    changeQuantity({ cartItemId, quantity: quantity + 1 });
  };

  return (
    <div className='flex gap-4 items-center'>
      <Button
        type='button'
        variant='outline'
        onClick={handleDecClick}
        className='w-10 h-10 rounded-full flex justify-center items-center'
        disabled={isUpdating || isDeleting}
      >
        <Minus className='text-black' />
      </Button>
      <p className='font-semibold text-lg'>{quantity}</p>
      <Button
        type='button'
        onClick={handleIncClick}
        className='w-10 h-10 rounded-full flex justify-center items-center'
        disabled={isUpdating || isDeleting}
      >
        <Plus className='text-white' />
      </Button>
    </div>
  );
};

export default DecIncButton;
