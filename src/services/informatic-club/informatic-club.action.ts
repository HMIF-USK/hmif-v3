'use server';

import { revalidatePath } from 'next/cache';

import { serverPublicRequest } from '@/libs/api/server';
import { ApiRequestError } from '@/libs/api/types';
import { getSession } from '@/services/auth/auth.store';
import { getMyDepartments } from '@/services/event/event.action';
import {
  isBidangInformatic,
  type TActivityResponse,
  type TCreateActivity,
  type TUpdateActivity,
} from './informatic-club.type';

export type TActionResult = { ok: true } | { ok: false; message: string };

const FORBIDDEN = 'Hanya departemen PPM yang boleh mengelola Informatic Club';

const failure = (error: unknown): { ok: false; message: string } => {
  if (error instanceof ApiRequestError) {
    return { ok: false, message: error.statusCode === 403 ? FORBIDDEN : error.message };
  }

  return { ok: false, message: 'Tidak dapat terhubung ke server' };
};

/** Hanya departemen PPM (dan superUser) yang boleh mengisi halaman Informatic Club. */
export async function canManageInformaticClub(): Promise<boolean> {
  const { isSuperUser, departments } = await getMyDepartments();

  return isSuperUser || departments.some((d) => d.name.toUpperCase() === 'PPM');
}

/**
 * Tabel Activity dipakai bersama, jadi yang ditampilkan hanya baris yang division-nya
 * salah satu bidang Informatic Club.
 */
export async function getActivities(): Promise<TActivityResponse[]> {
  try {
    const data = await serverPublicRequest<TActivityResponse[]>('/activities', {
      cache: 'no-store',
    });

    return (data ?? []).filter((item) => isBidangInformatic(item.division));
  } catch {
    return [];
  }
}

export async function getActivityById(id: string): Promise<TActivityResponse | undefined> {
  try {
    const data = await serverPublicRequest<TActivityResponse>(`/activities/${id}`, {
      cache: 'no-store',
    });

    return isBidangInformatic(data?.division) ? data : undefined;
  } catch {
    return undefined;
  }
}

/** Backend membatasi tulis ke PPM, jadi daftar kelolanya sama dengan daftar publik. */
async function mutate(
  path: string,
  method: 'POST' | 'PUT' | 'DELETE',
  body?: unknown,
): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) return { ok: false, message: 'Sesi habis, silakan login ulang' };

  if (!(await canManageInformaticClub())) return { ok: false, message: FORBIDDEN };

  try {
    await serverPublicRequest(path, {
      method,
      body,
      headers: { Authorization: `Bearer ${session.token}` },
    });

    revalidatePath('/informatic-club');

    return { ok: true };
  } catch (error) {
    return failure(error);
  }
}

export async function createActivity(payload: TCreateActivity): Promise<TActionResult> {
  return mutate('/activities', 'POST', payload);
}

export async function updateActivity({ id, ...payload }: TUpdateActivity): Promise<TActionResult> {
  const result = await mutate(`/activities/${id}`, 'PUT', payload);

  if (result.ok) revalidatePath(`/informatic-club/${id}`);

  return result;
}

export async function deleteActivity(id: string): Promise<TActionResult> {
  return mutate(`/activities/${id}`, 'DELETE');
}
