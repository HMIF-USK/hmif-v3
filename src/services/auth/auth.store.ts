'use server';

import { cookies } from 'next/headers';
import { jwtVerify, SignJWT } from 'jose';
import { authService } from './auth.service';
import { schemaLogin, type TLogin, type TSession } from './auth.type';
import { env } from '@/configs/env.config';
import { APP_SESSION_COOKIE_KEY } from '@/configs/cookies.config';
import { ApiRequestError } from '@/libs/api/types';

const key = new TextEncoder().encode(env.AUTH_SECRET_KEY);

// Backend menandatangani token dengan masa berlaku 1 hari, sesi mengikuti.
const SESSION_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export type TLoginResult = { ok: true } | { ok: false; message: string };

/**
 * Server action login. Sengaja mengembalikan hasil (bukan throw) supaya pesan error
 * tetap sampai ke client — Next.js menyamarkan error server action di production.
 */
export async function login(payload: TLogin): Promise<TLoginResult> {
  const parsed = schemaLogin.safeParse(payload);

  if (!parsed.success) {
    return { ok: false, message: 'Username atau password tidak valid' };
  }

  try {
    const res = await authService.login(parsed.data);

    if (!res?.token) {
      return { ok: false, message: res?.message || 'Login gagal, coba lagi' };
    }

    await setSession({ user: res.user, token: res.token });

    return { ok: true };
  } catch (error) {
    if (error instanceof ApiRequestError) {
      return { ok: false, message: error.message };
    }

    return { ok: false, message: 'Tidak dapat terhubung ke server' };
  }
}

export async function setSession({ user, token }: Omit<TSession, 'expires'>) {
  const session: TSession = {
    user,
    token,
    expires: new Date(Date.now() + SESSION_MAX_AGE_MS),
  };

  const cookieStore = await cookies();

  cookieStore.set(APP_SESSION_COOKIE_KEY, await encrypt(session), {
    expires: session.expires,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  return session;
}

export async function getSession(): Promise<TSession | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(APP_SESSION_COOKIE_KEY)?.value;

  if (!session) return null;

  try {
    return await decrypt(session);
  } catch {
    // Tanda tangan rusak atau kedaluwarsa
    return null;
  }
}

export async function getMe() {
  return (await getSession())?.user ?? null;
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete(APP_SESSION_COOKIE_KEY);
}

export async function logout() {
  await deleteSession();
}

/** Sesi valid selama JWT-nya belum kedaluwarsa (dicek lokal saat decrypt). */
export async function authValidator() {
  return (await getSession()) !== null;
}

export async function encrypt(payload: TSession) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(key);
}

export async function decrypt(input: string): Promise<TSession> {
  const { payload } = await jwtVerify(input, key, { algorithms: ['HS256'] });

  return payload as unknown as TSession;
}
