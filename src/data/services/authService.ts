import { Credentials, Session } from "../../domains/entities/Auth";
import { api } from "../api";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
}

export const authService = {
  async login({username, password}: Credentials): Promise<Session> {
    const {data} = await api.post<LoginResponse>('auth/login',{
      username,
      password,
      expiresInMins: 180,
    })
    return {
      token: data.accessToken,
      profile: {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName:  data.lastName,
        avatar: data.image
      }
    }
  }
}