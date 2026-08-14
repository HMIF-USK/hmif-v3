import Image from 'next/image';

const highlights = [
  'Kelola event & program kerja himpunan',
  'Publikasikan prestasi mahasiswa',
  'Satu akun untuk semua modul HMIF',
];

export default function LoginContent() {
  return (
    <div className="relative hidden h-full flex-col justify-between overflow-hidden p-12 lg:flex">
      {/* Aksen latar */}
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 size-96 rounded-full bg-brand/20 blur-3xl" />

      <Image src="/images/logo.png" alt="Logo HMIF" width={120} height={120} priority />

      <div className="relative max-w-md">
        <h2 className="font-nasalization text-4xl leading-tight text-foreground">
          Himpunan Mahasiswa Informatika
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Portal internal untuk pengurus HMIF. Masuk untuk mengelola konten, kegiatan, dan data
          himpunan.
        </p>

        <ul className="mt-8 grid gap-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="relative text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} HMIF. All rights reserved.
      </p>
    </div>
  );
}
