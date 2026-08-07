import NavLayout from '@/core/layouts/nav.layout';
import InformaticsClubContainer from './_containers/informatic-club';
import SharingKnowledge from './_containers/SharingKnowledge';

export default function InformaticClubPage() {
  return (
    <NavLayout>
      <InformaticsClubContainer />
      <SharingKnowledge />
    </NavLayout>
  );
}
