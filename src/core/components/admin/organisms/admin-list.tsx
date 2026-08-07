'use client';

export type AdminListItem = {
  id: string;
  title: string;
  subtitle?: string;
};

type AdminListProps = {
  title: string;
  items: AdminListItem[];
  isLoading?: boolean;
  error?: Error | null;
  editingId?: string | null;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  isMutating?: boolean;
};

/** Daftar ringkas di bawah form admin supaya PUT dan DELETE punya pintu masuk. */
export default function AdminList({
  title,
  items,
  isLoading,
  error,
  editingId,
  onEdit,
  onDelete,
  isMutating,
}: AdminListProps) {
  return (
    <section className="mt-8 rounded-[20px] border border-[#E19FFF] bg-white/5 p-6 backdrop-blur-[2px]">
      <h2 className="mb-4 text-xl font-bold text-[#C7A8ED]">{title}</h2>

      {isLoading && <p className="text-white/70">Memuat data…</p>}
      {error && <p className="text-red-400">Gagal memuat: {error.message}</p>}
      {!isLoading && !error && items.length === 0 && (
        <p className="text-white/70">Belum ada data.</p>
      )}

      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between gap-4 rounded-[10px] border px-4 py-3 ${
              editingId === item.id ? 'border-[#C8A7EF] bg-white/15' : 'border-white/20 bg-white/10'
            }`}
          >
            <div className="min-w-0">
              <p className="truncate font-semibold text-white">{item.title}</p>
              {item.subtitle && <p className="truncate text-sm text-white/60">{item.subtitle}</p>}
            </div>

            <div className="flex shrink-0 gap-2">
              {onEdit && (
                <button
                  type="button"
                  disabled={isMutating}
                  onClick={() => onEdit(item.id)}
                  className="rounded-[8px] bg-[#C8A7EF] px-4 py-2 text-sm font-bold text-[#7300FF] disabled:opacity-50"
                >
                  {editingId === item.id ? 'Sedang diedit' : 'Edit'}
                </button>
              )}
              {onDelete && (
                <button
                  type="button"
                  disabled={isMutating}
                  onClick={() => {
                    if (confirm(`Hapus "${item.title}"?`)) onDelete(item.id);
                  }}
                  className="rounded-[8px] border border-red-400/60 px-4 py-2 text-sm font-bold text-red-300 disabled:opacity-50"
                >
                  Hapus
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
