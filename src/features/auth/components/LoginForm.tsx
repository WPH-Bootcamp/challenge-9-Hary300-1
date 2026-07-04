'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { type LoginSchema, loginSchema } from './../schemas/loginSchema';
import InputField from './ui/InputField';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { fadeIn } from '@/motions';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  });
  const { mutate, isPending } = useLogin();
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem('email');
    const rememberMe = localStorage.getItem('rememberMe');
    if (email) {
      setValue('email', email);
    }
    if (rememberMe) {
      setValue('rememberMe', JSON.parse(rememberMe));
    }
  }, [setValue]);

  const onSubmit = (data: LoginSchema) => {
    const { rememberMe, ...payload } = data;
    if (rememberMe) {
      localStorage.setItem('email', data.email);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('rememberMe');
    }
    mutate(payload);
    reset();
    router.push('/');
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-xl lg:gap-2xl'
      variants={fadeIn}
      initial='hidden'
      animate='visible'
    >
      <InputField
        register={register}
        name='email'
        title='Email'
        type='email'
        errorMessage={errors.email?.message}
      />

      <InputField
        register={register}
        type='password'
        name='password'
        title='Password'
        errorMessage={errors.password?.message}
      />

      <Controller
        control={control}
        name='rememberMe'
        render={({ field }) => (
          <div className='flex gap-md items-center'>
            <Checkbox
              id='rememberMe'
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
            />
            <label htmlFor='rememberMe'>Remember Me</label>
          </div>
        )}
      />

      <Button disabled={isPending}>{isPending ? 'Loading...' : 'Login'}</Button>
    </motion.form>
  );
};

export default LoginForm;
