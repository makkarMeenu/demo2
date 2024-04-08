// src/types/sessionTypes.ts

export type UserSession = {
  error: string;
  message: string;
  status: string;
  statusCode: number;
  data: { accessToken: string; renewAccessToken: string; user: User };
};
export type User = {
  email: string | null;
  id: string | undefined;
  avatar: string | null;
  first_name: string | null;
  last_name: string | null;
};

export type SessionContextType = {
  user: UserSession;
  status: 'loading' | 'authenticated' | 'unauthenticated';
  setUser: React.Dispatch<React.SetStateAction<UserSession | null>>;
  setStatus: React.Dispatch<
    React.SetStateAction<'loading' | 'authenticated' | 'unauthenticated'>
  >;
};
