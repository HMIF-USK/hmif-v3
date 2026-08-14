import AdminContent from '@/core/components/admin/organisms/admin-content';
import { EmptyState, ManageHeader } from '@/core/components/admin/molecules/admin-manage-header';
import { canManageInformaticClub } from '@/services/informatic-club/informatic-club.action';

import CreateInformaticClub from './_containers/create-informatic-club';

export default async function AdminInformaticClubPage() {
  // Gerbangnya juga ada di server action & backend, ini supaya form-nya tidak dirender sama sekali.
  const allowed = await canManageInformaticClub();

  if (!allowed) {
    return (
      <AdminContent className="space-y-8">
        <ManageHeader title="Informatic Club" />
        <EmptyState text="Hanya departemen PPM yang dapat mengisi Informatic Club." />
      </AdminContent>
    );
  }

  return (
    <AdminContent>
      <CreateInformaticClub />
    </AdminContent>
  );
}
