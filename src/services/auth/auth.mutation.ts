import { useMutation } from '@tanstack/react-query';
import { login } from './auth.store';
import type { TLogin } from './auth.type';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: TLogin) => {
      const res = await login(payload);

      if (!res.ok) throw new Error(res.message);

      return res;
    },
  });
};
