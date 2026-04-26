'use client';
import NavLayout from '@/core/layouts/nav.layout';
import ArticleSection from '@/core/components/article-section';
import { events } from '@/data/event-list';
import { useMemo } from 'react';
import { getEventBySlug } from '@/data/event-list';
import { useParams } from 'next/navigation';
import { IArticle } from '@/types/article.types';

const DetailEventContainer: React.FC = () => {
  const { slug } = useParams();
  const event: IArticle | undefined = useMemo(() => {
    if (!slug || typeof slug !== 'string') return undefined;
    return getEventBySlug(slug);
  }, [slug]);
  return (
    <NavLayout>
      <ArticleSection data={event} />
    </NavLayout>
  );
};

export default DetailEventContainer;
