import { Suspense } from 'react';
import Loading from '@/components/shared/Loading';
import ProfilePageClient from './ProfilePageClient';

const ProfilePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProfilePageClient />
    </Suspense>
  );
};

export default ProfilePage;
