import { useMutation } from '@tanstack/react-query';
import { login, LoginPayload } from '../service/auth.service';
import { toast } from 'sonner';
import { authStore } from '@/store/auth-store';

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (result) => {
      authStore.getState().login(result.data.token, result.data.user);
      // localStorage.setItem('token', result.data.token);
      // localStorage.setItem('data', JSON.stringify(result.data.user));
      toast.success('Login successfully');
    },
    onError: (error) => {
      console.log(error.message);
      toast.error('Login failed');
    },
  });
};
