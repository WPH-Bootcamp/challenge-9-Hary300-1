import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react';
import Image from 'next/image';

type AvatarProps = {
  avatar?: string | null;
  size: 'sm' | 'md' | 'lg';
  className?: string;
};

const Avatar = ({ avatar, size, className }: AvatarProps) => {
  const sizeStyle = {
    sm: 'size-9',
    md: 'size-10 lg:size-12',
    lg: 'size-16 size-14.5',
  };

  const imageSize = {
    sm: '36px',
    md: '48px',
    lg: '64px',
  };

  const iconSize = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-7',
  };

  if (!avatar) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-full border bg-neutral-50',
          sizeStyle[size],
          className
        )}
      >
        <ImageOff className={cn('text-neutral-500', iconSize[size])} />
      </div>
    );
  }
  if (!avatar) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-full border bg-neutral-50',
          sizeStyle[size],
          className
        )}
      >
        <ImageOff className={cn('text-neutral-500', iconSize[size])} />
      </div>
    );
  }
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full',
        sizeStyle[size],
        className
      )}
    >
      <Image
        src={avatar}
        alt='Avatar'
        fill
        sizes={imageSize[size]}
        className='object-cover object-center'
      />
    </div>
  );
};

export default Avatar;
