'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LogOut } from 'lucide-react';

import type { AdminNavItem } from '@/configs/admin-nav.config';
import { logout } from '@/services/auth/auth.store';
import { cn } from '@/utils/classname';

const panelClass =
  'rounded-[10px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]';

export default function AdminSidebar({ items }: { items: readonly AdminNavItem[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, startLogout] = useTransition();

  const handleLogout = () =>
    startLogout(async () => {
      await logout();
      router.replace('/login');
      router.refresh();
    });

  return (
    <aside
      className={cn(
        // Menu bisa lebih tinggi dari layar saat semua menu departemen tampil
        // h-full (bukan min-h-full) supaya overflow-y-auto benar-benar men-scroll
        // saat semua menu departemen tampil dan lebih tinggi dari layar
        'flex h-full w-80 flex-col items-center overflow-y-auto rounded-[20px] pb-6',
        'border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
      )}
    >
      <div className={cn('my-5 flex h-60 w-72 items-center justify-center overflow-hidden', panelClass)}>
        <span className="font-nasalization text-3xl text-violet-200">HMIF</span>
      </div>

      <nav className="flex flex-col items-center gap-5">
        {items.map((item) => {
          // href '/' menuju situs publik, jadi jangan pernah ditandai aktif
          const isActive = item.href !== '/' && pathname.startsWith(item.href);

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'flex h-16 w-72 items-center justify-center transition-all duration-300',
                panelClass,
                isActive
                  ? 'scale-95 bg-gradient-to-b from-violet-600 from-[46%] to-purple-900 shadow-[inset_0px_4px_10px_rgba(0,0,0,0.5)]'
                  : 'bg-fuchsia-300/20 hover:-translate-y-1 hover:bg-fuchsia-300/30 hover:brightness-110 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] active:translate-y-0 active:scale-95'
              )}
            >
              <span className="px-4 text-center text-xl font-extrabold leading-tight text-violet-200 [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoggingOut}
        className={cn(
          'mt-auto flex h-16 w-72 items-center justify-center gap-3 transition-all duration-300',
          panelClass,
          'border-rose-300/40 bg-rose-400/20 hover:-translate-y-1 hover:bg-rose-400/30 hover:brightness-110 active:translate-y-0 active:scale-95',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0'
        )}
      >
        <LogOut className="size-6 text-rose-100" />
        <span className="text-xl font-extrabold text-rose-100 [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)]">
          {isLoggingOut ? 'KELUAR...' : 'LOG OUT'}
        </span>
      </button>
    </aside>
  );
}
