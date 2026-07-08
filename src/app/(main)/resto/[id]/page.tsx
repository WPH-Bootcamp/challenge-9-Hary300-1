'use client';
import DetailHeroCarousel from '@/components/detail/DetailHeroMobileSection';
import DetailHeroSection from '@/components/detail/DetailHeroSection';
import MenuSection from '@/components/detail/MenuSection';
import ReviewSection from '@/components/detail/ReviewSection';
import { useRestaurantDetail } from '@/features/restaurant/hook/useRestaurantDetail';
import Loading from '@/components/shared/Loading';
import { useParams } from 'next/navigation';

const RestaurantDetailPage = () => {
  const { id } = useParams();

  const {
    data: detailResponse,
    isLoading,
    error,
  } = useRestaurantDetail(Number(id));

  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  if (!detailResponse) {
    console.log('No data');
    return null;
  }

  const restaurantDetail = detailResponse.data;

  return (
    <div className='px-4 lg:px-30'>
      <DetailHeroCarousel images={restaurantDetail.images} />
      <DetailHeroSection restaurantDetail={restaurantDetail} />
      <div className='h-0.5 w-full bg-neutral-300' />
      <MenuSection restaurantDetail={restaurantDetail} />
      <div className='h-0.5 w-full bg-neutral-300' />
      <ReviewSection reviews={restaurantDetail.reviews} />
    </div>
  );
};

export default RestaurantDetailPage;
