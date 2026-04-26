'use client';

import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/classname';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { kebabCaseToWords } from '@/utils/string.format';

// Menu items with proper routes
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '/inbox',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '/search',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b p-4 h-20 flex justify-center">
        {isCollapsed ? (
          // <LayoutDashboard className="size-4" />
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        ) : (
          <div className="flex gap-2 items-center">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-semibold">{kebabCaseToWords(pathname)}</span>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>My Classes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
                      <Link
                        href={item.url}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-white dark:text-muted-foreground dark:hover:text-white h-10',
                          isActive && 'bg-muted text-white dark:bg-gray-800 dark:text-white'
                        )}
                      >
                        <item.icon className="h-6 w-6 lg:h-10 lg:w-10" />
                        <span className="text-base lg:text-lg">{!isCollapsed && item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
