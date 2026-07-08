import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrderCheckout } from '../service/checkout.service';
import { GetMyOrderParams } from '../service/myOrders.service';

export const checkoutKeys = {
  all: ['checkout'] as const,
  myOrders: (params: GetMyOrderParams) =>
    [...checkoutKeys.all, 'my-orders', params] as const,
};

export const useAddOrderCheckout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addOrderCheckout,
    onSuccess: (data) => {
      queryClient.setQueryData(['last-checkout'], data.data.transaction);
      queryClient.invalidateQueries({
        queryKey: checkoutKeys.all,
      });
    },
  });
};
