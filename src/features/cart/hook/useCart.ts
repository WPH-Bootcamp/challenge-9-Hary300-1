import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addItemCart,
  deleteAllItemsCart,
  deleteOneItemCart,
  getItemsCart,
  updateItemCart,
} from '../service/cart.service';

const cartQueryKeys = {
  all: ['cart'] as const,
};

export const useAddItemCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addItemCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.all,
      });
    },
  });
};

export const useGetItemsCart = () => {
  return useQuery({
    queryKey: cartQueryKeys.all,
    queryFn: getItemsCart,
  });
};

export const useUpdateItemCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateItemCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.all,
      });
    },
  });
};

export const useDeleteAllItemsCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAllItemsCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.all,
      });
    },
  });
};

export const useDeleteOneItemCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteOneItemCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.all,
      });
    },
  });
};
