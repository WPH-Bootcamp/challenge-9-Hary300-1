import heroImage from '@/assets/images/hero-image.png';
import Image from 'next/image';
const HomeHeroSection = () => {
  return (
    <div>
      <div className='relative w-full h-162 lg:h-206.75 mt-[-64px] lg:-mt-20'>
        <Image
          src={heroImage}
          alt='burger image'
          loading='eager'
          fill
          className='object-cover object-center'
        />
        <div className='absolute inset-0  bg-linear-to-t from-black/80 to-transparent' />
      </div>
    </div>
  );
};

export default HomeHeroSection;
