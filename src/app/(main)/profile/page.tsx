'use client';
import ProfileContent from '@/components/profile/ProfileContentSection';
import ProfileSideBar from '@/components/profile/ProfileSideBarSection';
import { useProfile } from '@/features/profile/hook/useProfile';
import { authStore } from '@/store/auth-store';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { data: profileResponse, isLoading, error } = useProfile();
  const token = authStore((state) => state.token);
  const router = useRouter();

  if (!token) {
    router.push('/auth?tab=signIn');
    return null;
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!profileResponse) return null;
  const profileData = profileResponse.data;
  return (
    <div className='flex gap-8 bg-neutral-50 px-4 lg:px-30 pt-12 pb-49.25 items-start'>
      <ProfileSideBar name={profileData?.name} />
      <ProfileContent profileData={profileData} />
    </div>
  );
};

export default ProfilePage;
