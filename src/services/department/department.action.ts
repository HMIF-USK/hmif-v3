'use server';

import { getSession } from '@/services/auth/auth.store';
import { serverPublicRequest } from '@/libs/api/server';
import { ApiRequestError } from '@/libs/api/types';
import type { TDepartmentResponse, TUpdateDepartmentPayload } from './department.type';

export type TActionResult = { ok: true } | { ok: false; message: string };

export type TMyDepartments = {
  isSuperUser: boolean;
  departments: TDepartmentResponse[];
};

export async function getMyDepartments(): Promise<TMyDepartments> {
  const session = await getSession();

  if (!session?.token) return { isSuperUser: false, departments: [] };

  const isSuperUser = session.user.role === 'superUser';

  try {
    const res = await serverPublicRequest<any>('/departments');
    const departments: TDepartmentResponse[] = Array.isArray(res)
      ? res
      : Array.isArray(res?.data)
      ? res.data
      : [];

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

const failure = (error: unknown): { ok: false; message: string } => {
  if (error instanceof ApiRequestError) {
    return { ok: false, message: error.message };
  }
  return { ok: false, message: 'Tidak dapat terhubung ke server' };
};

export async function updateDepartmentDetails({
  id,
  description,
  name,
  slug,
}: Partial<TUpdateDepartmentPayload> & { id: string }): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) {
    return { ok: false, message: 'Sesi habis, silakan login ulang' };
  }

  try {
    await serverPublicRequest(`/departments/${encodeURIComponent(id)}`, {
      method: 'PUT',
      body: { name, description, slug },
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error);
  }
}

export async function syncDepartmentPhotos(
  departmentIdOrSlug: string,
  photos: { url: string; namaFoto: string }[]
): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) {
    return { ok: false, message: 'Sesi habis, silakan login ulang' };
  }

  try {
    await serverPublicRequest(`/departments/${encodeURIComponent(departmentIdOrSlug)}/photos`, {
      method: 'PUT',
      body: { photos },
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error);
  }
}

export async function addDepartmentPhoto(
  departmentId: string,
  photo: { url: string; namaFoto: string }
): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) {
    return { ok: false, message: 'Sesi habis, silakan login ulang' };
  }

  try {
    await serverPublicRequest(`/departments/${departmentId}/photos`, {
      method: 'POST',
      body: photo,
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error);
  }
}

export async function deleteDepartmentPhoto(
  departmentId: string,
  photoId: string
): Promise<TActionResult> {
  const session = await getSession();

  if (!session?.token) {
    return { ok: false, message: 'Sesi habis, silakan login ulang' };
  }

  try {
    await serverPublicRequest(`/departments/${departmentId}/photos/${photoId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${session.token}` },
    });

    return { ok: true };
  } catch (error) {
    return failure(error);
  }
}
