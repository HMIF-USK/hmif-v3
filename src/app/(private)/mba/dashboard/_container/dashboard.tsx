'use client';

import { useCallback, useState } from 'react';
import InitScreen from '@/components/sections/private/InitScreen';

export default function MbaDashboardContainer() {
  const [isReady, setIsReady] = useState(false);

  const handleInit = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <InitScreen
      title="MBA Dashboard"
      description="Halaman dashboard MBA pribadi. Tekan tombol untuk mengaktifkan handler."
    >
      <button
        type="button"
        onClick={handleInit}
        className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
      >
        {isReady ? 'Handler sudah aktif' : 'Mulai handler'}
      </button>
      {isReady ? (
        <p className="mt-4 text-sm text-emerald-300">Handler MBA berhasil diaktifkan.</p>
      ) : null}
    </InitScreen>
  );
}
