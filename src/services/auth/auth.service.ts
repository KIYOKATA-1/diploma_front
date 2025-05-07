import api from "../api";

export interface LoginData { email: string; password: string }
export interface RegisterData {
  identificationNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export class AuthService {
  static async login(data: LoginData) {
    const res = await api.post<{ user: { username: string } }>('/auth/login', data);
    return res.data;
  }

  static async logout() {
    await api.post('/auth/logout');
  }

  static async me() {
    const res = await api.get<{ user: { username: string } }>('/auth/me');
    return res.data;
  }

  static async register(data: RegisterData) {
    const res = await api.post<{ success: boolean; message: string }>('/auth/register', data);
    return res.data;
  }

  static async activate(email: string) {
    const res = await api.get<{ success: boolean; message: string }>(
      `/auth/activate?email=${encodeURIComponent(email)}`
    );
    return res.data;
  }
}
