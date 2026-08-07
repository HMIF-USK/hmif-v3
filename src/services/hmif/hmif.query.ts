'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/libs/api/queryKeys';
import * as hmif from './hmif.service';
import type {
  TAchievementPayload,
  TActivityPayload,
  TDepartmentPayload,
  TProkerPayload,
} from './hmif.type';

// ============ ACHIEVEMENTS ============

export const useAchievements = () =>
  useQuery({ queryKey: queryKeys.achievements.list(), queryFn: () => hmif.getAchievements() });

export const useLatestAchievements = (limit = 6) =>
  useQuery({
    queryKey: queryKeys.achievements.latest(limit),
    queryFn: () => hmif.getLatestAchievements(limit),
  });

export const useAchievement = (id?: string) =>
  useQuery({
    queryKey: queryKeys.achievements.detail(id ?? ''),
    queryFn: () => hmif.getAchievement(id as string),
    enabled: Boolean(id),
  });

export const useCreateAchievement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: TAchievementPayload) => hmif.createAchievement(payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.achievements.all }),
  });
};

export const useUpdateAchievement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: Partial<TAchievementPayload> }) =>
      hmif.updateAchievement(id, payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.achievements.all }),
  });
};

export const useDeleteAchievement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => hmif.deleteAchievement(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.achievements.all }),
  });
};

// ============ EVENTS ============

export const useEvents = () =>
  useQuery({ queryKey: queryKeys.events.list(), queryFn: () => hmif.getEvents() });

export const useEvent = (id?: string) =>
  useQuery({
    queryKey: queryKeys.events.detail(id ?? ''),
    queryFn: () => hmif.getEvent(id as string),
    enabled: Boolean(id),
  });

// ============ PROKERS ============

export const useProkers = () =>
  useQuery({ queryKey: queryKeys.prokers.list(), queryFn: () => hmif.getProkers() });

export const useProker = (id?: string) =>
  useQuery({
    queryKey: queryKeys.prokers.detail(id ?? ''),
    queryFn: () => hmif.getProker(id as string),
    enabled: Boolean(id),
  });

export const useCreateProker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: TProkerPayload) => hmif.createProker(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.prokers.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.events.all });
    },
  });
};

export const useUpdateProker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: Partial<TProkerPayload> }) =>
      hmif.updateProker(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.prokers.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.events.all });
    },
  });
};

export const useDeleteProker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => hmif.deleteProker(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.prokers.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.events.all });
    },
  });
};

// ============ ACTIVITIES ============

export const useActivities = (division?: string) =>
  useQuery({
    queryKey: queryKeys.activities.list(division),
    queryFn: () => hmif.getActivities(division),
  });

export const useActivity = (id?: string) =>
  useQuery({
    queryKey: queryKeys.activities.detail(id ?? ''),
    queryFn: () => hmif.getActivity(id as string),
    enabled: Boolean(id),
  });

export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: TActivityPayload) => hmif.createActivity(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.activities.all }),
  });
};

export const useUpdateActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: Partial<TActivityPayload> }) =>
      hmif.updateActivity(id, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.activities.all }),
  });
};

export const useDeleteActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => hmif.deleteActivity(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.activities.all }),
  });
};

// ============ DEPARTMENTS ============

export const useDepartments = () =>
  useQuery({ queryKey: queryKeys.departments.list(), queryFn: () => hmif.getDepartments() });

export const useDepartment = (id?: string) =>
  useQuery({
    queryKey: queryKeys.departments.detail(id ?? ''),
    queryFn: () => hmif.getDepartment(id as string),
    enabled: Boolean(id),
  });

export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: TDepartmentPayload }) =>
      hmif.updateDepartment(id, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.departments.all }),
  });
};
