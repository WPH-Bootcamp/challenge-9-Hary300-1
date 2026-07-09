'use client';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter, useSearchParams } from 'next/navigation';

type DistanceProps = {
  onSelect?: () => void;
};

const Distance = ({ onSelect }: DistanceProps) => {
  const searchParams = useSearchParams();
  const distance = searchParams.get('filter') ?? '';
  const router = useRouter();

  const distances = [
    { value: 'nearby', label: 'Nearby' },
    { value: 'within_1_km', label: 'Within 1 km' },
    { value: 'within_3_km', label: 'Within 3 km' },
    { value: 'within_5_km', label: 'Within 5 km' },
  ];

  return (
    <div className='flex flex-col gap-2.5 pb-3 lg:pb-6'>
      <h3 className='font-extrabold text-md lg:text-lg'>Distance</h3>
      <RadioGroup
        value={distance}
        onValueChange={(value) => {
          onSelect?.();
          setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            params.set('filter', value);

            router.push(`/category?${params.toString()}`, { scroll: false });
          }, 200);
        }}
      >
        {distances.map((item) => (
          <div key={item.label} className='flex items-center gap-3'>
            <RadioGroupItem
              value={item.value}
              id={item.value}
              variant='checkbox'
            />
            <Label
              htmlFor={item.value}
              className='w-full h-full cursor-pointer'
            >
              <p>{item.label}</p>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Distance;
