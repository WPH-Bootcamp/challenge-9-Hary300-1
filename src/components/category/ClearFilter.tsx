'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

const ClearFilter = () => {
  const router = useRouter();

  const handleClearFilterClick = () => {
    router.push('/category', {
      scroll: false,
    });
  };
  return (
    <Button
      variant='outline'
      onClick={handleClearFilterClick}
      className='text-neutral-950 w-8 h-8 mr-4'
    >
      <Trash2 />
    </Button>
  );
};

export default ClearFilter;
