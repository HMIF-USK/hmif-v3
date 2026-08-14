'use client';
import NavLayout from '@/core/layouts/nav.layout';
import ArticleSection from '@/core/components/article-section';
import { useMemo } from 'react';
import { getEventBySlug } from '@/data/event-list';
import { useEventById } from '@/services/event/event.query';
import { useParams } from 'next/navigation';
import { IArticle } from '@/types/article.types';

const DetailEventContainer: React.FC = () => {
  const { slug } = useParams();
  const slugValue = typeof slug === 'string' ? slug : undefined;

  const staticEvent: IArticle | undefined = useMemo(
    () => (slugValue ? getEventBySlug(slugValue) : undefined),
    [slugValue]
  );

  // Event kabinet berjalan datang dari backend (tabel proker), slug-nya adalah id record.
  const { data: apiEvent } = useEventById(slugValue, !staticEvent);

  return (
    <NavLayout>
      <ArticleSection data={staticEvent ?? apiEvent} />
    </NavLayout>
  );
};

export default DetailEventContainer;
