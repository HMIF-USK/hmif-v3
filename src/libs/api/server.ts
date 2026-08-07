'use server';

import { cookies } from 'next/headers';
import { env } from '@/configs/env.config';
import { ACCESS_TOKEN_COOKIE_KEY } from '@/configs/cookies.config';
import { ApiRequestError, type ApiError, type ServerFetchConfig } from './types';

const API_BASE_URL = `${env.NEXT_PUBLIC_BACKEND_URL.replace(/\/$/, '')}/api`;

async function buildHeaders(withAuth: boolean): Promise<Record<string, string>> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };

  if (withAuth) {
    const token = (await cookies()).get(ACCESS_TOKEN_COOKIE_KEY)?.value;
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

async function serverFetch<T>(
  url: string,
  config: ServerFetchConfig,
  withAuth: boolean
): Promise<T> {
  const { method = 'GET', body, headers: extraHeaders = {}, cache, next } = config;

  const res = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: { ...(await buildHeaders(withAuth)), ...extraHeaders },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache,
    next,
  });

  const json = await res.json().catch(() => undefined);

  if (!res.ok) {
    const error = json as ApiError | undefined;
    throw new ApiRequestError(
      error?.message || `Request failed with status ${res.status}`,
      res.status,
      error?.errors
    );
  }

  // Backend ini tidak konsisten: sebagian membungkus `{ message, data }`
  // (prokers/events/achievements/departments), sebagian mengembalikan
  // payload mentah (activities) atau menaruh field di root (auth/login).
  return (json && typeof json === 'object' && 'data' in json ? json.data : json) as T;
}

export async function serverPublicRequest<T>(url: string, config: ServerFetchConfig = {}) {
  return serverFetch<T>(url, config, false);
}

export async function serverRequest<T>(url: string, config: ServerFetchConfig = {}) {
  return serverFetch<T>(url, config, true);
}

export async function serverGet<T>(url: string, config: ServerFetchConfig = {}) {
  return serverPublicRequest<T>(url, { ...config, method: 'GET' });
}

export async function serverPost<T>(url: string, data?: unknown) {
  return serverRequest<T>(url, { method: 'POST', body: data });
}

export async function serverPut<T>(url: string, data?: unknown) {
  return serverRequest<T>(url, { method: 'PUT', body: data });
}

export async function serverDel<T>(url: string) {
  return serverRequest<T>(url, { method: 'DELETE' });
}

export async function serverPublicPost<T>(url: string, data?: unknown) {
  return serverPublicRequest<T>(url, { method: 'POST', body: data });
}
