import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { ReviewBody } from '@/features/review/schema/reviewSchema';

type ReviewDialogBodyProps = {
  form: UseFormReturn<ReviewBody>;
  onSubmit: () => void;
};

const ReviewDialogBody = ({ form, onSubmit }: ReviewDialogBodyProps) => {
  const { register, watch, setValue } = form;

  const rating = watch('star');

  const handleRatingClick = (index: number) => {
    setValue('star', index + 1, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <DialogContent className='sm:max-w-100'>
      <form onSubmit={onSubmit}>
        <DialogHeader>
          <DialogTitle>Give Review</DialogTitle>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <p className='font-extrabold text-md text-center'>Give Rating</p>
            <div className='flex gap-2 justify-center'>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`size-7.5 cursor-pointer ${
                    index < rating
                      ? 'fill-[#FFAB0D] text-[#FFAB0D]'
                      : 'fill-neutral-400 text-neutral-400'
                  }`}
                  onClick={() => handleRatingClick(index)}
                />
              ))}
            </div>
          </Field>
          <Field>
            <Textarea
              id='textarea-message'
              placeholder='Please share your thoughts about our service!'
              {...register('comment')}
            />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <Button type='submit' onClick={() => console.log('clicked')}>
            Send
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default ReviewDialogBody;
