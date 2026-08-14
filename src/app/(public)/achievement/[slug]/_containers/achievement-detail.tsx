'use client';
import NavLayout from '@/core/layouts/nav.layout';
import ArticleSection from '@/core/components/article-section';
import { useMemo } from 'react';
import { getAchievementBySlug } from '@/data/achievement-list';
import { useAchievementById } from '@/services/achievement/achievement.query';
import { useParams } from 'next/navigation';
import { IArticle } from '@/types/article.types';

const DetailAchievementContainer: React.FC = () => {
  const { slug } = useParams();
  const slugValue = typeof slug === 'string' ? slug : undefined;

  const staticAchievement: IArticle | undefined = useMemo(
    () => (slugValue ? getAchievementBySlug(slugValue) : undefined),
    [slugValue]
  );

  // Prestasi kabinet berjalan datang dari backend, slug-nya adalah id record.
  const { data: apiAchievement } = useAchievementById(slugValue, !staticAchievement);

  return (
    <NavLayout>
      <ArticleSection data={staticAchievement ?? apiAchievement} />
    </NavLayout>
  );
};

export default DetailAchievementContainer;
