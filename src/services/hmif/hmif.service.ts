'use server';

import { revalidatePath } from 'next/cache';
import { serverDel, serverGet, serverPost, serverPut } from '@/libs/api/server';
import type {
  TAchievement,
  TAchievementPayload,
  TActivity,
  TActivityPayload,
  TDepartment,
  TDepartmentPayload,
  TEvent,
  TProker,
  TProkerPayload,
} from './hmif.type';

// ============ ACHIEVEMENTS ============
// GET publik, POST/PUT/DELETE butuh Bearer token (achievementRouter.use(verifyToken)).

export async function getAchievements() {
  return serverGet<TAchievement[]>('/achievements');
}

export async function getLatestAchievements(limit = 6) {
  return serverGet<TAchievement[]>(`/achievements/latest?limit=${limit}`);
}

export async function getAchievement(id: string) {
  return serverGet<TAchievement>(`/achievements/${id}`);
}

export async function createAchievement(payload: TAchievementPayload) {
  const data = await serverPost<TAchievement>('/achievements', payload);
  revalidatePath('/achievement');
  return data;
}

export async function updateAchievement(id: string, payload: Partial<TAchievementPayload>) {
  const data = await serverPut<TAchievement>(`/achievements/${id}`, payload);
  revalidatePath('/achievement');
  return data;
}

export async function deleteAchievement(id: string) {
  const data = await serverDel<{ success: boolean; message: string }>(`/achievements/${id}`);
  revalidatePath('/achievement');
  return data;
}

// ============ EVENTS (proyeksi Proker dengan status != ComingSoon) ============

export async function getEvents() {
  return serverGet<TEvent[]>('/events');
}

export async function getEvent(id: string) {
  return serverGet<TEvent>(`/events/${id}`);
}

// ============ PROKERS ============

export async function getProkers() {
  return serverGet<TProker[]>('/prokers');
}

export async function getProker(id: string) {
  return serverGet<TProker>(`/prokers/${id}`);
}

export async function createProker(payload: TProkerPayload) {
  const data = await serverPost<TProker>('/prokers', payload);
  revalidatePath('/event');
  return data;
}

export async function updateProker(id: string, payload: Partial<TProkerPayload>) {
  const data = await serverPut<TProker>(`/prokers/${id}`, payload);
  revalidatePath('/event');
  return data;
}

export async function deleteProker(id: string) {
  const data = await serverDel<{ message: string }>(`/prokers/${id}`);
  revalidatePath('/event');
  return data;
}

// ============ ACTIVITIES ============

export async function getActivities(division?: string) {
  return serverGet<TActivity[]>(division ? `/activities?division=${division}` : '/activities');
}

export async function getActivity(id: string) {
  return serverGet<TActivity>(`/activities/${id}`);
}

export async function createActivity(payload: TActivityPayload) {
  return serverPost<TActivity>('/activities', payload);
}

export async function updateActivity(id: string, payload: Partial<TActivityPayload>) {
  return serverPut<TActivity>(`/activities/${id}`, payload);
}

export async function deleteActivity(id: string) {
  return serverDel<{ message: string }>(`/activities/${id}`);
}

// ============ DEPARTMENTS ============

export async function getDepartments() {
  return serverGet<TDepartment[]>('/departments');
}

export async function getDepartment(id: string) {
  return serverGet<TDepartment>(`/departments/${id}`);
}

export async function updateDepartment(id: string, payload: TDepartmentPayload) {
  return serverPut<TDepartment>(`/departments/${id}`, payload);
}
