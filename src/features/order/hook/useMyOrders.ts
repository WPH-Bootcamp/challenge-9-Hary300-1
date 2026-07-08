import { useQuery } from '@tanstack/react-query';
import { getMyOrder, GetMyOrderParams } from '../service/myOrders.service';
import { checkoutKeys } from './useCheckout';

export const useGetMyOrder = (params: GetMyOrderParams) => {
  return useQuery({
    queryKey: checkoutKeys.myOrders(params),
    queryFn: () => getMyOrder(params),
  });
};
