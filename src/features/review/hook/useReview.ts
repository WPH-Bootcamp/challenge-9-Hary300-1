import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewReview } from '../service/review.service';

export const useCreateNewReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['review'],
      });
    },
  });
};
