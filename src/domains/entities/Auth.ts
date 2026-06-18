export interface Credentials {
  username: string;
  password: string;
}

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

export interface Session {
  token: string;
  profile: UserProfile
}