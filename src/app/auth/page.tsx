import { Suspense } from 'react';
import AuthPageClient from './AuthPageClient';
export const dynamic = 'force-dynamic';

const AuthPage = () => {
  return (
    <Suspense fallback={null}>
      <AuthPageClient />
    </Suspense>
  );
};

export default AuthPage;
