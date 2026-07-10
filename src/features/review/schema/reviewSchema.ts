import { z } from 'zod';

export const reviewSchema = z.object({
  transactionId: z.string(),
  restaurantId: z.number(),
  star: z.number().min(1).max(5),
  comment: z.string(),
  menuIds: z.array(z.number()),
});

export type ReviewBody = z.infer<typeof reviewSchema>;
