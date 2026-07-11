'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ReviewDialogBody from '../../shared/ReviewDialogBody';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ReviewFormBody,
  reviewFormSchema,
} from '@/features/review/schema/reviewSchema';
import { useCreateNewReview } from '@/features/review/hook/useReview';

type GiveReviewButtonProps = {
  transactionId: string;
  restaurantId: number;
  menuIds: number[];
};

const GiveReviewButton = ({
  transactionId,
  restaurantId,
  menuIds,
}: GiveReviewButtonProps) => {
  const [open, setOpen] = useState(false);
  const { mutate } = useCreateNewReview();

  const form = useForm<ReviewFormBody>({
    defaultValues: {
      star: 0,
      comment: '',
    },
    resolver: zodResolver(reviewFormSchema),
  });

  const rating = useWatch({
    control: form.control,
    name: 'star',
  });

  const onSubmit = (data: ReviewFormBody) => {
    const payload = { ...data, transactionId, restaurantId, menuIds };
    mutate(payload, {
      onSuccess: () => setOpen(false),
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

        <ReviewDialogBody
          rating={rating}
          register={form.register}
          onRatingChange={(rating: number) => {
            form.setValue('star', rating + 1, {
              shouldValidate: true,
              shouldDirty: true,
            });
          }}
          onSubmit={form.handleSubmit(onSubmit)}
        />
      </Dialog>
    </div>
  );
};

export default GiveReviewButton;
