import { Suspense } from 'react';
import AuthPageClient from './AuthPageClient';

const AuthPage = () => {
  return (
    <Suspense fallback={null}>
      <AuthPageClient />
    </Suspense>
  );
};

export default AuthPage;
