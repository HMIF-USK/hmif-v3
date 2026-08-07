'use client';
import NavLayout from '@/core/layouts/nav.layout';
import ArticleSection from '@/core/components/article-section';
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { IArticle } from '@/types/article.types';
import { useProker, useProkers } from '@/services/hmif/hmif.query';
import { prokerToArticle } from '@/services/hmif/hmif.mapper';

const DetailEventContainer: React.FC = () => {
  const { slug } = useParams();
  const id = typeof slug === 'string' ? slug : undefined;

  // GET /prokers/:id membawa foto + departemen, lebih lengkap dari GET /events/:id
  const { data, isLoading } = useProker(id);
  const { data: others } = useProkers();

  const event: IArticle | undefined = useMemo(
    () => (data ? prokerToArticle(data) : undefined),
    [data]
  );

  const related: IArticle[] = useMemo(() => (others ?? []).map(prokerToArticle), [others]);

  return (
    <NavLayout>
      {isLoading ? (
        <p className="w-full py-40 text-center text-foreground/70">Memuat data…</p>
      ) : (
        <ArticleSection data={event} related={related} />
      )}
    </NavLayout>
  );
};

export default DetailEventContainer;
