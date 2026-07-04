import { api } from '@/lib/api/axios';
import { type LoginSchema } from '../schemas/loginSchema';
import { RegisterSchema } from '../schemas/registerSchema';
import { ApiSuccessResponse, AuthData } from '../types';

export type LoginPayload = Omit<LoginSchema, 'rememberMe'>;

export const login = async (
  payload: LoginPayload
): Promise<ApiSuccessResponse<AuthData>> => {
  const { data } = await api.post<ApiSuccessResponse<AuthData>>(
    '/auth/login',
    payload
  );
  return data;
};

export const register = async (
  payload: RegisterSchema
): Promise<ApiSuccessResponse<AuthData>> => {
  const { data } = await api.post('/auth/register', payload);
  return data;
};
