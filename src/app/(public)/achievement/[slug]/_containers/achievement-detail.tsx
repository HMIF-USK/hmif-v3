'use client';
import NavLayout from '@/core/layouts/nav.layout';
import ArticleSection from '@/core/components/article-section';
import { useMemo } from 'react';
import { getAchievementBySlug } from '@/data/achievement-list';
import { useParams } from 'next/navigation';
import { IArticle } from '@/types/article.types';

const DetailAchievementContainer: React.FC = () => {
  const { slug } = useParams();
  const achievement: IArticle | undefined = useMemo(() => {
    if (!slug || typeof slug !== 'string') return undefined;
    return getAchievementBySlug(slug);
  }, [slug]);
  return (
    <NavLayout>
      <ArticleSection data={achievement} />
    </NavLayout>
  );
};

export default DetailAchievementContainer;
