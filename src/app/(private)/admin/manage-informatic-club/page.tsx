import AdminContent from '@/core/components/admin/organisms/admin-content';
import { EmptyState, ManageHeader } from '@/core/components/admin/molecules/admin-manage-header';
import { canManageInformaticClub } from '@/services/informatic-club/informatic-club.action';

import ManageInformaticClub from './_containers/manage-informatic-club';

export default async function ManageInformaticClubPage() {
  const allowed = await canManageInformaticClub();

  if (!allowed) {
    return (
      <AdminContent className="space-y-8">
        <ManageHeader title="Kelola Informatic Club" />
        <EmptyState text="Hanya departemen PPM yang dapat mengelola Informatic Club." />
      </AdminContent>
    );
  }

  return <ManageInformaticClub />;
}
