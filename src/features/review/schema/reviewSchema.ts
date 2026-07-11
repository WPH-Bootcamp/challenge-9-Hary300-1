import { z } from 'zod';

export const reviewFormSchema = z.object({
  star: z.number().min(1).max(5),
  comment: z.string(),
});

export const createReviewSchema = reviewFormSchema.extend({
  transactionId: z.string(),
  restaurantId: z.number(),
  menuIds: z.array(z.number()),
});

export type ReviewFormBody = z.infer<typeof reviewFormSchema>;
export type CreateReviewBody = z.infer<typeof createReviewSchema>;
