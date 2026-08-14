import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  createActivity,
  deleteActivity,
  getActivities,
  updateActivity,
} from './informatic-club.action';
import type { TCreateActivity, TUpdateActivity } from './informatic-club.type';

export const useActivities = () =>
  useQuery({
    queryKey: ['activities'],
    queryFn: getActivities,
  });

/** Semua mutasi kegiatan membuat daftar kelola ikut ter-refresh. */
const useActivityMutation = <TInput,>(
  fn: (input: TInput) => Promise<{ ok: boolean; message?: string }>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: TInput) => {
      const res = await fn(input);

      if (!res.ok) throw new Error(res.message);

      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
    },
  });
};

export const useCreateActivity = () => useActivityMutation<TCreateActivity>(createActivity);
export const useUpdateActivity = () => useActivityMutation<TUpdateActivity>(updateActivity);
export const useDeleteActivity = () => useActivityMutation<string>(deleteActivity);
