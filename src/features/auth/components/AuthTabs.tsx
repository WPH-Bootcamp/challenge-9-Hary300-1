'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useRouter } from 'next/navigation';

type AuthTabsProps = {
  value: 'signIn' | 'signUp';
};

const AuthTabs = ({ value }: AuthTabsProps) => {
  const router = useRouter();
  return (
    <Tabs
      value={value}
      onValueChange={(tab) =>
        router.replace(`/auth?tab=${tab}`, { scroll: false })
      }
      className='w-full'
    >
      <TabsList className='w-full p-md'>
        <TabsTrigger value='signIn'>Sign in</TabsTrigger>
        <TabsTrigger value='signUp'>Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value='signIn'>
        <LoginForm />
      </TabsContent>
      <TabsContent value='signUp'>
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
