'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/classname';
import { Eye, EyeOff, Loader2, Lock, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/services/auth/auth.mutation';
import { schemaLogin, type TLogin } from '@/services/auth/auth.type';

const fieldClass =
  'w-full h-12 rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/70 focus:bg-white/10 disabled:opacity-60';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutateAsync, isPending } = useLogin();

  // Hanya terima path internal, supaya ?next= tidak bisa dipakai untuk open redirect.
  const nextPath = searchParams.get('next');
  const redirectTo = nextPath?.startsWith('/') && !nextPath.startsWith('//')
    ? nextPath
    : '/admin';
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(schemaLogin),
    defaultValues: { username: '', password: '' },
  });

  const handleLogin = async (data: TLogin) => {
    try {
      await mutateAsync(data);
      toast.success('Berhasil masuk');
      router.replace(redirectTo);
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login gagal');
      setFocus('password');
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-8">
          <h1 className="font-nasalization text-3xl text-foreground">Masuk</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Gunakan akun HMIF kamu untuk melanjutkan.
          </p>
        </div>

        <form noValidate autoComplete="off" onSubmit={handleSubmit(handleLogin)} className="grid gap-5">
          <div className="grid gap-2">
            <label htmlFor="username" className="text-sm font-medium text-foreground">
              Username
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="username"
                autoComplete="username"
                placeholder="Masukkan username"
                disabled={isPending}
                aria-invalid={!!errors.username}
                aria-describedby={errors.username ? 'username-error' : undefined}
                className={cn(fieldClass, errors.username && 'border-destructive/70')}
                {...register('username')}
              />
            </div>
            {errors.username && (
              <p id="username-error" className="text-sm text-destructive">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Masukkan password"
                disabled={isPending}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className={cn(fieldClass, 'pr-12', errors.password && 'border-destructive/70')}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="h-12 w-full rounded-xl text-sm font-semibold"
          >
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Memproses...
              </>
            ) : (
              'Masuk'
            )}
          </Button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link href="/home" className="transition-colors hover:text-foreground">
          Kembali ke beranda
        </Link>
      </p>
    </div>
  );
}
