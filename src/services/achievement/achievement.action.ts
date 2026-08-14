'use server';

import { getSession } from '@/services/auth/auth.store';
import { serverPublicRequest } from '@/libs/api/server';
import { ApiRequestError } from '@/libs/api/types';
import type {
  TCreateAchievement,
  TAchievementResponse,
  TUpdateAchievement,
} from './achievement.type';

export type TCreateAchievementResult =
  | { ok: true; data: TAchievementResponse }
  | { ok: false; message: string };

export type TActionResult = { ok: true } | { ok: false; message: string };

const FORBIDDEN = 'Hanya departemen MBA yang boleh mengelola achievement';

const failure = (error: unknown): { ok: false; message: string } => {
  if (error instanceof ApiRequestError) {
    if (error.statusCode === 403) return { ok: false, message: FORBIDDEN };

    // Backend membalas daftar error validasi pada 400
    const details = Object.values(error.errors ?? {}).flat();

    return { ok: false, message: details.length ? details.join(', ') : error.message };
  }

  return { ok: false, message: 'Tidak dapat terhubung ke server' };
};

/**
 * POST /api/achievements — endpoint ini butuh Bearer token dan hanya menerima
 * role `mba` / `superUser`. Token disimpan di sesi httpOnly, jadi request-nya
 * harus lewat server action, tidak bisa langsung dari browser.
 */
export async function createAchievement(
  payload: TCreateAchievement,
): Promise<TCreateAchievementResult> {
  const session = await getSession();

  if (!session?.token) {
    return { ok: false, message: 'Sesi habis, silakan login ulang' };
  }

  try {
    const res = await serverPublicRequest<{ data: TAchievementResponse }>('/achievements', {
      method: 'POST',
      body: payload,
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true, data: res.data };
  } catch (error) {
    return failure(error);
  }
}

export async function updateAchievement({
  id,
  ...payload
}: TUpdateAchievement): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) return { ok: false, message: 'Sesi habis, silakan login ulang' };

  try {
    await serverPublicRequest(`/achievements/${id}`, {
      method: 'PUT',
      body: payload,
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error);
  }
}

export async function deleteAchievement(id: string): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) return { ok: false, message: 'Sesi habis, silakan login ulang' };

  try {
    await serverPublicRequest(`/achievements/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error);
  }
}

/** Role dipakai halaman kelola untuk menyembunyikan aksi yang pasti ditolak backend. */
export async function canManageAchievement(): Promise<boolean> {
  const session = await getSession();

  return session?.user.role === 'mba' || session?.user.role === 'superUser';
}
