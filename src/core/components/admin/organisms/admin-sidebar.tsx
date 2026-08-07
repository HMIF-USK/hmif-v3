'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { adminNavItems } from '@/configs/admin-nav.config';
import { logout } from '@/services/auth/auth.store';

const panelClass =
  'rounded-[10px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]';

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={`flex min-h-full w-80 flex-col items-center rounded-[20px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]`}
    >
      <div className={`my-5 flex h-40 w-72 items-center justify-center ${panelClass}`}>
        <span className="text-3xl font-extrabold text-violet-200">HMIF USK</span>
      </div>

      <nav className="flex flex-col items-center gap-5">
        {adminNavItems.map((item) => {
          const isActive = pathname?.startsWith(item.href);

          return (
            <Link
              href={item.href}
              key={item.id}
              className={`
                flex h-16 w-72 items-center justify-center ${panelClass}
                transition-all duration-300
                ${
                  isActive
                    ? 'bg-gradient-to-b from-violet-600 from-[46%] to-purple-900 shadow-[inset_0px_4px_10px_rgba(0,0,0,0.5)] scale-95'
                    : 'bg-fuchsia-300/20 hover:bg-fuchsia-300/30 hover:brightness-110 hover:-translate-y-1 active:scale-95'
                }
              `}
            >
              <span className="text-2xl font-extrabold text-violet-200 [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <form action={logout} className="mt-auto mb-6 w-72">
        <button
          type="submit"
          className="h-14 w-full rounded-[10px] border border-red-400/60 text-xl font-bold text-red-300 transition-all hover:bg-red-400/10"
        >
          Logout
        </button>
      </form>
    </aside>
  );
}
