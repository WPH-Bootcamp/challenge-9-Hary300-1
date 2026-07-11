import { z } from 'zod';

export const reviewFormSchema = z.object({
  star: z.number().min(1).max(5),
  comment: z.string(),
});

export type ReviewFormBody = z.infer<typeof reviewFormSchema>;
