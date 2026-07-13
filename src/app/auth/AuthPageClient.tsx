'use client';
import authImage from '@/assets/images/auth-image.png';
import Logo from '@/components/shared/Logo';
import AuthTabs from '@/features/auth/components/AuthTabs';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Tab = 'signIn' | 'signUp';

const AuthPageClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [tab, setTab] = useState<Tab>(
    searchParams.get('tab') === 'signUp' ? 'signUp' : 'signIn'
  );

  const handleTabChange = (newTab: Tab) => {
    setTab(newTab);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', newTab);
    router.replace(`/auth?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='flex'>
      <div className='hidden lg:block lg:w-1/2 min-h-screen overflow-hidden relative'>
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
          <Logo logoColor='red' stayVisibleText={true} textColor='dark' />
          <p className='font-extrabold text-display-xs lg:text-display-sm'>
            Welcome Back
          </p>
          <p className='font-medium text-sm lg:text-md'>
            Good to see you again! Let’s eat
          </p>
          <AuthTabs value={tab} onValueChange={handleTabChange} />
        </div>
      </div>
    </div>
  );
};

export default AuthPageClient;
