'use client';

import { useState } from 'react';

import AdminContent from '@/core/components/admin/organisms/admin-content';
import AdminSection from '@/core/components/admin/organisms/admin-section';
import AdminField from '@/core/components/admin/molecules/admin-field';
import AdminInput from '@/core/components/admin/atoms/admin-input';
import AdminTextarea from '@/core/components/admin/atoms/admin-textarea';
import AdminList from '@/core/components/admin/organisms/admin-list';

import { useDepartments, useUpdateDepartment } from '@/services/hmif/hmif.query';

/** Departemen hanya bisa diperbarui (backend tidak menyediakan POST/DELETE). */
export default function DepartmentPage() {
  const { data: departments = [], isLoading, error } = useDepartments();
  const updateDepartment = useUpdateDepartment();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleEdit = (id: string) => {
    const department = departments.find((item) => item.id === id);
    if (!department) return;

    setEditingId(id);
    setName(department.name);
    setDescription(department.description);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!editingId) return;

    try {
      await updateDepartment.mutateAsync({ id: editingId, payload: { name, description } });
      setEditingId(null);
      setName('');
      setDescription('');
      alert('Departemen berhasil diperbarui!');
    } catch (err) {
      alert((err as Error).message || 'Gagal memperbarui departemen.');
    }
  };

  return (
    <AdminContent>
      <form onSubmit={handleSubmit} className="space-y-8 font-poppins">
        <AdminSection title="Departemen">
          <div className="space-y-8">
            <AdminField label="Nama" required>
              <AdminInput
                value={name}
                placeholder="Pilih departemen dari daftar di bawah"
                onChange={(e) => setName(e.target.value)}
                disabled={!editingId}
              />
            </AdminField>

            <AdminField label="Deskripsi" required>
              <AdminTextarea
                value={description}
                placeholder="Deskripsi departemen..."
                onChange={(e) => setDescription(e.target.value)}
                disabled={!editingId}
              />
            </AdminField>

            <button
              type="submit"
              disabled={!editingId || updateDepartment.isPending || !name || !description}
              className="h-14 w-full rounded-[10px] bg-[#C8A7EF] text-xl font-bold text-[#7300FF] disabled:opacity-50"
            >
              {updateDepartment.isPending ? 'Menyimpan…' : 'Simpan Perubahan'}
            </button>
          </div>
        </AdminSection>
      </form>

      <AdminList
        title="Daftar Departemen"
        items={departments.map((department) => ({
          id: department.id,
          title: department.name,
          subtitle: department.description,
        }))}
        isLoading={isLoading}
        error={error}
        editingId={editingId}
        isMutating={updateDepartment.isPending}
        onEdit={handleEdit}
      />
    </AdminContent>
  );
}
