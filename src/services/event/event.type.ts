/** Bentuk response GET /api/departments dari hmif-backend-v3 */
export type TDepartmentResponse = {
  id: string;
  name: string;
  description: string;
  user_id: string;
};

export type TProkerStatus = 'ComingSoon' | 'OnGoing' | 'Completed';

/** Bentuk body POST /api/prokers — event disimpan sebagai Proker milik departemen */
export type TCreateEvent = {
  name: string;
  departement_id: string;
  description: string;
  location: string;
  event_start: string;
  event_end: string;
  status: TProkerStatus;
  photos: string[];
};

/** Bentuk body PUT /api/prokers/:id — departement_id sengaja tidak bisa diubah */
export type TUpdateEvent = {
  id: string;
  name: string;
  description: string;
  location: string;
  event_start: string;
  event_end: string;
  status: TProkerStatus;
  photos: string[];
};

export type TEventResponse = {
  id: string;
  departement_id: string;
  name: string;
  description: string;
  location: string;
  status: TProkerStatus;
  event_start: string;
  event_end: string;
  created_at: string;
  departement?: { id: string; name: string; description?: string };
  fotoProkers?: { id: string; url: string }[];
};
