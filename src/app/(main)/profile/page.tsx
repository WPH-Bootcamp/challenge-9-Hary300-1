'use client';
import ProfileContent from '@/components/profile/ProfileContentSection';
import ProfileSideBar from '@/components/profile/ProfileSideBarSection';
import { useProfile } from '@/features/profile/hook/useProfile';
import { authStore } from '@/features/auth/store/auth-store';
import { useRouter, useSearchParams } from 'next/navigation';
import MyOrders from '@/components/profile/orders/MyOrdersSection';
import Address from '@/components/profile/address/Address';
import { ReactNode, useEffect } from 'react';
import Loading from '@/components/shared/Loading';

const ProfilePage = () => {
  const { data: profileResponse, isLoading, error } = useProfile();
  const token = authStore((state) => state.token);
  const hasHydrated = authStore((state) => state.hasHydrated);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (hasHydrated && !token) {
      router.replace('/auth?tab=signIn');
    }
  }, [hasHydrated, token, router]);

  if (!hasHydrated) {
    return <Loading />;
  }

  if (!token) return null;
  const page = searchParams.get('page');

  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  if (!profileResponse) return null;
  const profileData = profileResponse.data;

  const pageComponents: Record<string, ReactNode> = {
    profile: <ProfileContent profileData={profileData} />,
    orders: <MyOrders />,
    address: <Address />,
  };

  const activePage = page ?? 'profile';
  return (
    <div className='flex gap-8 bg-neutral-50 px-4 lg:px-30 pt-12 pb-49.25 items-start'>
      <ProfileSideBar name={profileData?.name} />
      {pageComponents[activePage]}
    </div>
  );
};

export default ProfilePage;
