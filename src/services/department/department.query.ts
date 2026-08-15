import { useQuery } from '@tanstack/react-query';
import { apiPublicRequest } from '@/libs/api/client';
import type { TDepartmentResponse } from './department.type';

export const useDepartments = (enabled = true) =>
  useQuery({
    queryKey: ['departments'],
    enabled,
    queryFn: async () => {
      const res = await apiPublicRequest<any>('/departments');
      if (Array.isArray(res)) return res as TDepartmentResponse[];
      if (Array.isArray(res?.data)) return res.data as TDepartmentResponse[];
      return [];
    },
  });

export const useDepartmentById = (id?: string, enabled = true) =>
  useQuery({
    queryKey: ['departments', id],
    enabled: enabled && !!id,
    queryFn: async () => {
      const res = await apiPublicRequest<any>(`/departments/${id}`);
      if (res?.data) return res.data as TDepartmentResponse;
      if (res?.id) return res as TDepartmentResponse;
      return undefined;
    },
  });

export const useDepartmentBySlug = (slug?: string, enabled = true) =>
  useQuery({
    queryKey: ['departments', 'slug', slug],
    enabled: enabled && !!slug,
    queryFn: async () => {
      try {
        const res = await apiPublicRequest<any>(`/departments/slug/${slug}`);
        if (res?.data) return res.data as TDepartmentResponse;
        if (res?.id) return res as TDepartmentResponse;
        return null;
      } catch {
        return null;
      }
    },
  });
