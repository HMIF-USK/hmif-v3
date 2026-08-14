'use server';

import { getSession } from '@/services/auth/auth.store';
import { serverPublicRequest } from '@/libs/api/server';
import { ApiRequestError } from '@/libs/api/types';
import type {
  TCreateEvent,
  TDepartmentResponse,
  TEventResponse,
  TUpdateEvent,
} from './event.type';

export type TCreateEventResult =
  | { ok: true; data: TEventResponse }
  | { ok: false; message: string };

export type TActionResult = { ok: true } | { ok: false; message: string };

const failure = (error: unknown, forbidden: string): { ok: false; message: string } => {
  if (error instanceof ApiRequestError) {
    if (error.statusCode === 403) return { ok: false, message: forbidden };

    return { ok: false, message: error.message };
  }

  return { ok: false, message: 'Tidak dapat terhubung ke server' };
};

const FORBIDDEN_EVENT = 'Kamu hanya boleh mengelola event departemenmu sendiri';

export type TMyDepartments = {
  isSuperUser: boolean;
  departments: TDepartmentResponse[];
};

/**
 * Departemen yang boleh dipilih di form. Backend menolak departement_id milik
 * orang lain, jadi form-nya ikut dibatasi: akun departemen hanya dapat
 * departemennya sendiri (dropdown disembunyikan), superUser dapat semuanya.
 */
export async function getMyDepartments(): Promise<TMyDepartments> {
  const session = await getSession();

  if (!session?.token) return { isSuperUser: false, departments: [] };

  const isSuperUser = session.user.role === 'superUser';

  try {
    const res = await serverPublicRequest<{ data: TDepartmentResponse[] }>('/departments');
    const departments = res.data ?? [];

    return {
      isSuperUser,
      departments: isSuperUser
        ? departments
        : departments.filter((d) => d.user_id === session.user.id),
    };
  } catch {
    return { isSuperUser, departments: [] };
  }
}

/**
 * POST /api/prokers — butuh Bearer token. Token ada di sesi httpOnly, jadi
 * request-nya harus lewat server action, bukan langsung dari browser.
 */
export async function createEvent(payload: TCreateEvent): Promise<TCreateEventResult> {
  const session = await getSession();

  if (!session?.token) {
    return { ok: false, message: 'Sesi habis, silakan login ulang' };
  }

  try {
    const res = await serverPublicRequest<{ data: TEventResponse }>('/prokers', {
      method: 'POST',
      body: payload,
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true, data: res.data };
  } catch (error) {
    return failure(error, FORBIDDEN_EVENT);
  }
}

/** Event yang boleh dikelola user ini: miliknya sendiri, atau semuanya kalau superUser. */
export async function getMyEvents(): Promise<TEventResponse[]> {
  const { isSuperUser, departments } = await getMyDepartments();

  try {
    const res = await serverPublicRequest<{ data: TEventResponse[] }>('/prokers');
    const events = res.data ?? [];

    if (isSuperUser) return events;

    const mine = new Set(departments.map((d) => d.id));

    return events.filter((event) => mine.has(event.departement_id));
  } catch {
    return [];
  }
}

export async function updateEvent({ id, ...payload }: TUpdateEvent): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) return { ok: false, message: 'Sesi habis, silakan login ulang' };

  try {
    await serverPublicRequest(`/prokers/${id}`, {
      method: 'PUT',
      body: payload,
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error, FORBIDDEN_EVENT);
  }
}

export async function deleteEvent(id: string): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) return { ok: false, message: 'Sesi habis, silakan login ulang' };

  try {
    await serverPublicRequest(`/prokers/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error, FORBIDDEN_EVENT);
  }
}
