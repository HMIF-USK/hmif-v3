export interface TFotoDepartement {
  id: string;
  departement_id: string;
  url: string;
  namaFoto: string;
}

export interface TDepartmentResponse {
  id: string;
  name: string;
  slug?: string | null;
  description: string;
  user_id: string;
  fotoDepartements?: TFotoDepartement[];
}

export interface TUpdateDepartmentPayload {
  id: string;
  name?: string;
  slug?: string;
  description?: string;
  photos?: { url: string; namaFoto: string }[];
}
