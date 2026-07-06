'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import DotIndicator from './DotIndicator';
import Image from 'next/image';

const DetailHeroCarousel = ({ images }: { images: string[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const count = api?.scrollSnapList().length ?? 0;

  useEffect(() => {
    if (!api) return;

    const update = () => setCurrent(api.selectedScrollSnap());

    update();

    api.on('select', update);
    return () => {
      api.off('select', update);
    };
  }, [api]);

  return (
    <section id='hero-mobile' className='lg:hidden flex flex-col gap-3 pt-4'>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className='relative row-span-2 h-[260.63px] '>
                <Image
                  src={image}
                  alt={`banner-${index + 1}`}
                  loading='eager'
                  fill
                  sizes='(max-width: 768px) 100vw, 200px'
                  className='object-cover object-center rounded-2xl'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <DotIndicator count={count} api={api} current={current} />
    </section>
  );
};

export default DetailHeroCarousel;
