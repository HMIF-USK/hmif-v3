'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

export function ReactQueryClientProvider({ children }: PropsWithChildren) {
  // Dibuat sekali per mount. Kalau di-new di badan render, setiap re-render
  // menghasilkan cache baru dan semua query jalan ulang dari nol.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            // Error backend (tabel hilang, 500) tidak akan sembuh dengan diulang
            // tiga kali; satu percobaan ulang cukup untuk gangguan jaringan.
            retry: 1,
          },
        },
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
