import { z } from 'zod';

export const schemaLogin = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export type TLogin = z.infer<typeof schemaLogin>;

/** Sama dengan enum `userrRole` di prisma/schema.prisma */
export type TRole = 'mba' | 'superUser' | 'departement';

export type TUser = {
  id: string;
  username: string;
  role: TRole;
};

/** Bentuk response POST /api/auth/login dari hmif-backend-v3 */
export type TLoginResponse = {
  message: string;
  token: string;
  user: TUser;
};

export type TSession = {
  user: TUser;
  token: string;
  expires: Date;
};
