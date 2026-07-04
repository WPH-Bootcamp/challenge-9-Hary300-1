import { useMutation } from '@tanstack/react-query';
import { RegisterSchema } from '../schemas/registerSchema';
import { register } from '../service/auth.service';
import { toast } from 'sonner';

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterSchema) => register(payload),
    onSuccess: (result) => {
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('data', JSON.stringify(result.data));
      toast.success('Register successfully');
    },
    onError: (error) => {
      console.log(error.message);
      toast.error('Register failed');
    },
  });
};
