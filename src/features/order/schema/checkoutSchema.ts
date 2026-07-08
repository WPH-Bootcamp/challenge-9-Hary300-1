import { z } from 'zod';

export const checkoutSchema = z.object({
  deliveryAddress: z.string().min(1),
  phone: z.string().min(1),
  paymentMethod: z.string().min(1),
  notes: z.string().optional(),
});

export type CheckoutForm = z.infer<typeof checkoutSchema>;
