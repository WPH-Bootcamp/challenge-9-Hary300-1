export type UpdateProfilePayload = {
  name?: string;
  email?: string;
  phone?: string;
};

export type Profile = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
  latitude: number | null;
  longitude: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ProfileResponse = {
  success: boolean;
  message: string;
  data: Profile;
};
