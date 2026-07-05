'use client';
import CategorySection from '@/components/home/CategorySection';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import RecommendedSection from '@/components/home/RecomendedSection';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-6 lg:gap-12'>
      <HomeHeroSection />
      <CategorySection />
      <RecommendedSection />
    </div>
  );
};

export default HomePage;
