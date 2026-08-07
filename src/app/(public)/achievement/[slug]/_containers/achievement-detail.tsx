'use client';
import NavLayout from '@/core/layouts/nav.layout';
import ArticleSection from '@/core/components/article-section';
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { IArticle } from '@/types/article.types';
import { useAchievement, useAchievements } from '@/services/hmif/hmif.query';
import { achievementToArticle } from '@/services/hmif/hmif.mapper';

const DetailAchievementContainer: React.FC = () => {
  const { slug } = useParams();
  const id = typeof slug === 'string' ? slug : undefined;

  const { data, isLoading } = useAchievement(id);
  const { data: others } = useAchievements();

  const achievement: IArticle | undefined = useMemo(
    () => (data ? achievementToArticle(data) : undefined),
    [data]
  );

  const related: IArticle[] = useMemo(
    () => (others ?? []).map(achievementToArticle),
    [others]
  );

  return (
    <NavLayout>
      {isLoading ? (
        <p className="w-full py-40 text-center text-foreground/70">Memuat data…</p>
      ) : (
        <ArticleSection data={achievement} related={related} />
      )}
    </NavLayout>
  );
};

export default DetailAchievementContainer;
