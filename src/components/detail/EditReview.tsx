'use client';
import { Dialog, DialogTrigger } from '../ui/dialog';
import ReviewDialogBody from '../shared/ReviewDialogBody';
import { useEditReview } from '@/features/review/hook/useReview';
import { useForm, useWatch } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  ReviewFormBody,
  reviewFormSchema,
} from '@/features/review/schema/reviewSchema';

import { Button } from '../ui/button';
import { Edit } from 'lucide-react';

type EditReviewProps = {
  restaurantId: number;
  star: number;
  comment: string;
  reviewId: number;
};

const EditReview = ({
  star,
  comment,
  reviewId,
  restaurantId,
}: EditReviewProps) => {
  const [open, setOpen] = useState(false);
  const { mutate: editReview } = useEditReview();
  const form = useForm<ReviewFormBody>({
    defaultValues: {
      star: star,
      comment: comment,
    },
    resolver: zodResolver(reviewFormSchema),
  });

  const rating = useWatch({
    control: form.control,
    name: 'star',
  });

  const onSubmit = (data: ReviewFormBody) => {
    const payload = { ...data, reviewId, restaurantId };

    editReview(payload, {
      onSuccess: () => setOpen(false),
    });
  };
  return (
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
        <Button
          variant='outline'
          className='text-neutral-950 w-10 h-10 aspect-square shrink-0'
        >
          <Edit />
        </Button>
      </DialogTrigger>

      <ReviewDialogBody
        rating={rating}
        onRatingChange={(index: number) => {
          form.setValue('star', index + 1, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
        register={form.register}
        onSubmit={form.handleSubmit(onSubmit)}
      />
    </Dialog>
  );
};

export default EditReview;
