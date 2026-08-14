import type { Metadata } from 'next';
import LoginContainer from '@/modules/auth/login/containers/login.container';

export const metadata: Metadata = {
  title: 'Masuk',
  description: 'Masuk ke portal internal HMIF.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginContainer />;
}
