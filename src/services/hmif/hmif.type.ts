/**
 * Bentuk data persis seperti yang dikembalikan hmif-backend-v3.
 * Sumber: prisma/schema.prisma + tiap *Service.ts di backend.
 */

export type ProkerStatus = 'ComingSoon' | 'OnGoing' | 'Completed';
export type ActivityStatus = ProkerStatus;

export type TFoto = {
  id: string;
  url: string;
};

export type TDepartment = {
  id: string;
  name: string;
  description: string;
  user_id: string;
  fotoDepartements?: TFoto[];
};

export type TAchievement = {
  id: string;
  title: string;
  location: string;
  description: string;
  achiever_name: string;
  achievement_date: string;
  created_by_user_id: string;
  created_at: string;
  fotoAchievements: TFoto[];
};

/** GET /events — proyeksi ramping dari Proker (status != ComingSoon). */
export type TEvent = {
  id: string;
  name: string;
  description: string;
  event_start: string;
  event_end: string;
  location: string;
};

export type TProker = {
  id: string;
  departement_id: string;
  name: string;
  description: string;
  status: ProkerStatus;
  event_start: string;
  event_end: string;
  location: string;
  created_at: string;
  updated_at: string;
  departement?: TDepartment;
  fotoProkers?: TFoto[];
};

export type TActivity = {
  id: string;
  title: string;
  description: string;
  division: string;
  location: string;
  status: ActivityStatus;
  event_start: string;
  event_end: string;
  created_by_user_id: string;
  created_at: string;
  updated_at: string;
  fotoActivities: TFoto[];
};

// ============ PAYLOAD ============

export type TAchievementPayload = {
  title: string;
  description: string;
  location: string;
  achiever_name: string;
  achievement_date: string;
  foto_urls: string[];
};

export type TProkerPayload = {
  name: string;
  departement_id: string;
  description: string;
  event_start: string;
  event_end: string;
  location: string;
  status: ProkerStatus;
  photos: string[];
};

export type TActivityPayload = {
  title: string;
  description: string;
  division: string;
  location: string;
  status: ActivityStatus;
  event_start: string;
  event_end: string;
  created_by_user_id: string;
  photos: string[];
};

export type TDepartmentPayload = {
  name: string;
  description: string;
};
