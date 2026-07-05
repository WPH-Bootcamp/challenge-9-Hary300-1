'use client';
import authImage from '@/assets/images/auth-image.png';
import Logo from '@/components/shared/Logo';
import AuthTabs from '@/features/auth/components/AuthTabs';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

type Tab = 'signIn' | 'signUp';

const AuthPage = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const tab: Tab = tabParam === 'signUp' ? 'signUp' : 'signIn';

  return (
    <div className='flex'>
      <div className='hidden lg:block lg:w-1/2 h-screen overflow-hidden relative'>
        <Image
          src={authImage}
          alt='burger on the tray'
          loading='eager'
          fill
          sizes='(max-width: 1023px) 0vw, 50vw'
          className='object-cover object-bottom'
        />
      </div>
      <div className='flex justify-center items-center lg:w-1/2 px-3xl py-8 min-h-screen w-full'>
        <div className='flex flex-col gap-xl lg:gap-2xl w-full max-w-93.5'>
          <Logo />
          <p className='font-extrabold text-display-xs lg:text-display-sm'>
            Welcome Back
          </p>
          <p className='font-medium text-sm lg:text-md'>
            Good to see you again! Let’s eat
          </p>
          <AuthTabs value={tab} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
