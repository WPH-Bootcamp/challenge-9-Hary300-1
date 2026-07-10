'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ReviewDialogBody from './ReviewDialogBody';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ReviewBody,
  reviewSchema,
} from '@/features/review/schema/reviewSchema';
import { useCreateNewReview } from '@/features/review/hook/useReview';
import { toast } from 'sonner';

type GiveReviewButton = {
  transactionId: string;
  restaurantId: number;
  menuIds: number[];
};

const GiveReviewButton = ({
  transactionId,
  restaurantId,
  menuIds,
}: GiveReviewButton) => {
  const [open, setOpen] = useState(false);
  const { mutate } = useCreateNewReview();

  const form = useForm<ReviewBody>({
    defaultValues: {
      transactionId,
      restaurantId,
      star: 0,
      comment: '',
      menuIds,
    },
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = (data: ReviewBody) => {
    console.log('submit');
    console.log(data);

    mutate(data, {
      onSuccess: () => {
        setOpen(false);
        toast.success('Review posted successfully');
      },
    });
  };
  return (
    <div className='w-full lg:max-w-60'>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            form.reset();
          }
        }}
      >
        <DialogTrigger asChild className='w-full'>
          <Button type='button'>Give Review</Button>
        </DialogTrigger>

        <ReviewDialogBody form={form} onSubmit={form.handleSubmit(onSubmit)} />
      </Dialog>
    </div>
  );
};

export default GiveReviewButton;
