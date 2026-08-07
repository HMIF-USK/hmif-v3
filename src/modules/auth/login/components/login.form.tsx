'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TextField from '@/core/components/text-field';
import { cn } from '@/utils/classname';
import { Icon } from '@iconify/react/dist/iconify.js';
import { toast } from 'sonner';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/services/auth/auth.mutation';
import { schemaLogin, TLogin } from '@/services/auth/auth.type';

export default function LoginForm() {
  const loginMutation = useLogin();
  const isLoading = loginMutation.isPending;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLogin = (data: TLogin) => {
    loginMutation.mutate(data, {
      onSuccess: () => toast.success('Login berhasil'),
      onError: (error) => toast.error(error?.message || 'Username atau password salah'),
    });
  };

  return (
    <Card className={cn('w-full min-w-[320px] max-w-lg mx-auto')}>
      <CardHeader className={cn('flex items-center justify-center flex-col gap-2')}>
        <CardTitle className="lg:text-4xl">Login Admin HMIF</CardTitle>
      </CardHeader>

      <CardContent>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  placeholder="Enter your username"
                  error={errors.username?.message}
                  disabled={isLoading}
                />
              )}
            />
          </div>

          <div className="grid w-full items-center gap-1.5 mb-4">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  error={errors.password?.message}
                  forgotPassword
                  disabled={isLoading}
                />
              )}
            />
          </div>

          <Button
            type="submit"
            variant="default"
            className={cn('text-sm font-normal mb-4 w-full h-10')}
            disabled={isLoading}
          >
            {isLoading ? <Icon icon="eos-icons:three-dots-loading" className="size-5" /> : 'Log in'}
          </Button>

        </form>
      </CardContent>

    </Card>
  );
}
