import 'server-only';

import { ApiRequestError } from '@/libs/api/types';
import { serverPublicPost } from '@/libs/api/server';
import type { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import type { TLogin, TLoginResponse } from './auth.type';

const handleServerError = (error: unknown) => {
  if (error instanceof ApiRequestError) {
    return {
      data: null,
      status: error.statusCode || false,
      message: error.message || 'Something went wrong',
      errors: error.errors || [],
    };
  }

  return { message: 'Something went wrong' };
};

const login = async (data: TLogin) => {
  try {
    return await serverPublicPost<TResponse<TLoginResponse>>('/auth/login', data);
  } catch (error) {
    throw handleServerError(error);
  }
};

const verifyToken = async (token: string) => {
  try {
    return await serverPublicPost<TResponse<null | object>>('/auth/verify-access', { token });
  } catch (error) {
    throw handleServerError(error);
  }
};

export const authService = {
  login,
  verifyToken,
};
