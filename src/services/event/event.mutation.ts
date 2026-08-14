import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createEvent,
  deleteEvent,
  getMyDepartments,
  getMyEvents,
  updateEvent,
} from './event.action';
import type { TCreateEvent, TUpdateEvent } from './event.type';

export const useMyDepartments = () =>
  useQuery({
    queryKey: ['my-departments'],
    queryFn: getMyDepartments,
  });

export const useMyEvents = () =>
  useQuery({
    queryKey: ['my-events'],
    queryFn: getMyEvents,
  });

/** Semua mutasi event membuat daftar kelola ikut ter-refresh. */
const useEventMutation = <TInput,>(fn: (input: TInput) => Promise<{ ok: boolean; message?: string }>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: TInput) => {
      const res = await fn(input);

      if (!res.ok) throw new Error(res.message);

      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-events'] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

export const useCreateEvent = () => useEventMutation<TCreateEvent>(createEvent);
export const useUpdateEvent = () => useEventMutation<TUpdateEvent>(updateEvent);
export const useDeleteEvent = () => useEventMutation<string>(deleteEvent);
