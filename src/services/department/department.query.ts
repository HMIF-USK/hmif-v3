import { useQuery } from '@tanstack/react-query';
import { apiPublicRequest } from '@/libs/api/client';
import type { TDepartmentResponse } from './department.type';

export const useDepartments = (enabled = true) =>
  useQuery({
    queryKey: ['departments'],
    enabled,
    queryFn: async () => {
      const res = await apiPublicRequest<{ data: TDepartmentResponse[] }>('/departments');
      return res?.data ?? [];
    },
  });

export const useDepartmentById = (id?: string, enabled = true) =>
  useQuery({
    queryKey: ['departments', id],
    enabled: enabled && !!id,
    queryFn: async () => {
      const res = await apiPublicRequest<{ data: TDepartmentResponse }>(`/departments/${id}`);
      return res?.data;
    },
  });

export const useDepartmentBySlug = (slug?: string, enabled = true) =>
  useQuery({
    queryKey: ['departments', 'slug', slug],
    enabled: enabled && !!slug,
    queryFn: async () => {
      try {
        const res = await apiPublicRequest<{ data: TDepartmentResponse }>(`/departments/slug/${slug}`);
        return res?.data;
      } catch {
        return null;
      }
    },
  });
