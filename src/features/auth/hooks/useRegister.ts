import { useMutation } from '@tanstack/react-query';
import { RegisterSchema } from '../schemas/registerSchema';
import { register } from '../service/auth.service';
import { toast } from 'sonner';
// import { authStore } from '@/store/auth-store';

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterSchema) => register(payload),
    onSuccess: () => {
      toast.success('Register successfully. Please Login');
    },
    onError: (error) => {
      console.log(error.message);
      toast.error('Register failed');
    },
  });
};
