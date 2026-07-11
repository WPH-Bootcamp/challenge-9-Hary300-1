import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  createNewReview,
  deleteReview,
  editReview,
  getAllReviewsRestaurant,
  getMyReviews,
} from '../service/review.service';
import { toast } from 'sonner';
import axios from 'axios';
import { ApiErrorResponse } from '@/types/api.type';
import { GetAllReviewsRestaurantParams } from '../types';

export const useGetMyReviews = () => {
  return useQuery({
    queryKey: ['my-reviews'],
    queryFn: getMyReviews,
  });
};

export const useCreateNewReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['my-reviews', 'create'],
    mutationFn: createNewReview,
    onSuccess: () => {
      toast.success('Review posted successfully');
      queryClient.invalidateQueries({
        queryKey: ['my-reviews'],
      });
    },
    onError: (error) => {
      if (axios.isAxiosError<ApiErrorResponse>(error))
        toast.error(error.response?.data.message ?? 'Failed to create review');
    },
  });
};

export const useEditReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['my-reviews', 'edit'],
    mutationFn: editReview,
    onSuccess: (_, variables) => {
      toast.success('Review edited successfully');
      queryClient.invalidateQueries({
        queryKey: ['my-reviews'],
      });
      queryClient.invalidateQueries({
        queryKey: ['restaurant', 'detail', variables.restaurantId],
      });
    },
    onError: () => {
      toast.error('Failed to edit review');
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['my-reviews', 'delete'],
    mutationFn: deleteReview,
    onSuccess: (_, variables) => {
      toast.success('Review deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['my-reviews'],
      });
      queryClient.invalidateQueries({
        queryKey: ['restaurant', 'detail', variables.restaurantId],
      });
    },
    onError: () => {
      toast.error('Failed to delete review');
    },
  });
};

export const useGetAllReviewsRestaurant = (
  params: Omit<GetAllReviewsRestaurantParams, 'page'>
) => {
  return useInfiniteQuery({
    queryKey: ['restaurant', 'review', params],
    queryFn: ({ pageParam }) =>
      getAllReviewsRestaurant({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
  });
};
