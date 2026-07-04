import { useMutation } from '@tanstack/react-query';
import { login, LoginPayload } from '../service/auth.service';
import { toast } from 'sonner';

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (result) => {
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('data', JSON.stringify(result.data.user));
      toast.success('Login successfully');
    },
    onError: (error) => {
      console.log(error.message);
      toast.error('Login failed');
    },
  });
};
