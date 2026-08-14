import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getMe } from '@/services/auth/auth.store';
import { TUser } from '@/services/auth/auth.type';
import { CircleUserRound, History, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface UserDropdownProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const userDropdownItems: UserDropdownProps[] = [
  {
    title: 'Profile',
    icon: <CircleUserRound className="text-white" />,
    href: '/profile',
  },
  {
    title: 'History Forum',
    icon: <History className="text-white" />,
    href: '/history-forum',
  },
  {
    title: 'Logout',
    icon: <LogOut className="text-white" />,
    href: '/logout',
  },
];

export default function UserDropdown() {
  const [user, setUser] = useState<TUser | null | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getMe();
      setUser(userData);
    };

    fetchUser();
  }, []);

  const initial = user?.username?.charAt(0).toUpperCase() ?? 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar>
          <AvatarImage src="/avatars/1.png" />
          <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="/avatars/1.png" />
            <AvatarFallback>{initial}</AvatarFallback>
          </Avatar>
          <DropdownMenuLabel className="flex flex-col gap-2">
            <span className="text-sm font-semibold">{user?.username ?? 'Pengguna'}</span>
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator />

        {userDropdownItems.map((item) => (
          <DropdownMenuItem key={item.title} className="mb-2">
            <Link href={item.href} className="flex items-center gap-2 text-white">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
