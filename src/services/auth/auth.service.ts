import 'server-only';

import { serverPublicPost } from '@/libs/api/server';
import type { TLogin, TLoginResponse } from './auth.type';

/**
 * Backend membalas 400 + { message } untuk kredensial salah, jadi ApiRequestError
 * dari serverFetch sudah membawa pesan yang layak ditampilkan apa adanya.
 */
export const authService = {
  login: (data: TLogin) => serverPublicPost<TLoginResponse>('/auth/login', data),
};
