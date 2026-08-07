'use server';

import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';
import { redirect } from 'next/navigation';
import { authService } from './auth.service';
import { schemaLogin, type TLogin, type TUser } from './auth.type';
import { ACCESS_TOKEN_COOKIE_KEY, ACCESS_TOKEN_MAX_AGE } from '@/configs/cookies.config';

const USER_COOKIE_KEY = 'app_user';

/**
 * Backend sudah mengeluarkan JWT ber-exp 1 hari dan memverifikasinya sendiri di
 * middleware/auth.ts, jadi frontend cukup menyimpan token itu apa adanya di
 * cookie httpOnly — tidak perlu membungkusnya lagi dengan sesi jose sendiri.
 */
export async function setSession({ username, password }: TLogin) {
  const result = schemaLogin.safeParse({ username, password });

  if (!result.success) {
    throw new Error(result.error.issues[0]?.message ?? 'Input tidak valid');
  }

  const res = await authService.login(result.data);

  if (!res?.token) {
    throw new Error(res?.message || 'Login gagal');
  }

  const cookieStore = await cookies();
  const options = {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: ACCESS_TOKEN_MAX_AGE,
  };

  cookieStore.set(ACCESS_TOKEN_COOKIE_KEY, res.token, options);
  cookieStore.set(USER_COOKIE_KEY, JSON.stringify(res.user), options);

  return res.user;
}

export async function login(payload: TLogin) {
  return setSession(payload);
}

export async function getToken() {
  return (await cookies()).get(ACCESS_TOKEN_COOKIE_KEY)?.value;
}

export async function getMe(): Promise<TUser | null> {
  const raw = (await cookies()).get(USER_COOKIE_KEY)?.value;

  if (!raw) return null;

  try {
    return JSON.parse(raw) as TUser;
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_TOKEN_COOKIE_KEY);
  cookieStore.delete(USER_COOKIE_KEY);
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}

/** Token valid = ada dan belum lewat exp-nya. Verifikasi tanda tangan tetap milik backend. */
export async function authValidator() {
  const token = await getToken();

  if (!token) return false;

  try {
    const { exp } = decodeJwt(token);

    if (exp && exp * 1000 < Date.now()) {
      await deleteSession();
      return false;
    }

    return true;
  } catch {
    await deleteSession();
    return false;
  }
}
