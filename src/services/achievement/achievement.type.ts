/** Bentuk response GET /api/achievements dari hmif-backend-v3 */
export type TAchievementResponse = {
  id: string;
  title: string;
  location: string;
  description: string;
  achiever_name: string;
  achievement_date: string;
  achievement_end_date: string | null;
  level: string | null;
  created_by_user_id: string;
  created_at: string;
  fotoAchievements: { id: string; url: string }[];
};

/** Bentuk body PUT /api/achievements/:id */
export type TUpdateAchievement = TCreateAchievement & { id: string };

/** Bentuk body POST /api/achievements */
export type TCreateAchievement = {
  title: string;
  description: string;
  location: string;
  achiever_name: string;
  achievement_date: string;
  achievement_end_date?: string;
  level?: string;
  foto_urls: string[];
};
