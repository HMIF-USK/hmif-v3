import 'server-only';

import { serverPublicPost } from '@/libs/api/server';
import type { TLogin, TLoginResponse } from './auth.type';

const login = async (data: TLogin) => {
  return serverPublicPost<TLoginResponse>('/auth/login', data);
};

export const authService = {
  login,
};
