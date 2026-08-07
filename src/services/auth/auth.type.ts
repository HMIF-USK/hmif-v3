import { z } from 'zod';

export const schemaLogin = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export type TLogin = z.infer<typeof schemaLogin>;

/** Bentuk asli respons POST /api/auth/login pada hmif-backend-v3. */
export type TLoginResponse = {
  message: string;
  token: string;
  user: TUser;
};

export type TUser = {
  id: string;
  username: string;
};
