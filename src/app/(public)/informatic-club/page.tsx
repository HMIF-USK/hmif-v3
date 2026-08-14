import KnowledgeSharingSection from '@/components/sections/public/InformaticClub/KnowledgeSharingSection';
import NavLayout from '@/core/layouts/nav.layout';
import { getActivities } from '@/services/informatic-club/informatic-club.action';

import InformaticsClubContainer from './_containers/informatic-club';

export default async function InformaticClubPage() {
  const activities = await getActivities();

  return (
    <NavLayout>
      <InformaticsClubContainer />
      <KnowledgeSharingSection items={activities} />
    </NavLayout>
  );
}
