import { Suspense } from 'react';
import Loading from '@/components/shared/Loading';
import AuthPageClient from './AuthPageClient';

const AuthPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthPageClient />
    </Suspense>
  );
};

export default AuthPage;
