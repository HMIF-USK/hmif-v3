import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  canManageAchievement,
  createAchievement,
  deleteAchievement,
  updateAchievement,
} from './achievement.action';
import type { TCreateAchievement, TUpdateAchievement } from './achievement.type';

export const useCanManageAchievement = () =>
  useQuery({
    queryKey: ['can-manage-achievement'],
    queryFn: canManageAchievement,
  });

/** Semua mutasi achievement membuat daftar kelola & halaman publik ikut ter-refresh. */
const useAchievementMutation = <TInput,>(
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
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
    },
  });
};

export const useCreateAchievement = () => useAchievementMutation<TCreateAchievement>(createAchievement);
export const useUpdateAchievement = () => useAchievementMutation<TUpdateAchievement>(updateAchievement);
export const useDeleteAchievement = () => useAchievementMutation<string>(deleteAchievement);
