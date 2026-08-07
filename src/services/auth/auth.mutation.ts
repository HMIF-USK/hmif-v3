'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { login } from './auth.store';
import type { TLogin } from './auth.type';

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: TLogin) => login(payload),
    onSuccess: () => {
      router.replace('/admin/dashboard');
      router.refresh();
    },
  });
};
