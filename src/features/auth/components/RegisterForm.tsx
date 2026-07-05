'use client';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterSchema } from '../schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from './ui/InputField';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { fadeIn } from '@/motions';
import { useRouter } from 'next/navigation';
import { useRegister } from '../hooks/useRegister';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterSchema>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  });
  const { mutate, isPending } = useRegister();
  const router = useRouter();

  const onSubmit = (data: RegisterSchema) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        router.push('/auth?tab=signIn');
      },
    });
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
        name='name'
        title='Name'
        type='text'
        errorMessage={errors.name?.message}
      />

      <InputField
        register={register}
        name='email'
        title='Email'
        type='email'
        errorMessage={errors.email?.message}
      />

      <InputField
        register={register}
        name='phone'
        title='Phone Number'
        type='tel'
        errorMessage={errors.phone?.message}
      />

      <InputField
        register={register}
        name='password'
        title='Password'
        type='password'
        errorMessage={errors.password?.message}
      />

      <InputField
        register={register}
        name='confirmPassword'
        title='Confirm Password'
        type='password'
        errorMessage={errors.confirmPassword?.message}
      />

      <Button disabled={isPending}>
        {isPending ? 'Loading...' : 'Register'}
      </Button>
    </motion.form>
  );
};

export default RegisterForm;
