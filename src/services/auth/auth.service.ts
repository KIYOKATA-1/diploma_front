import {
  RegisterData,
  RegisterResponse,
  RegisterError,
  LoginResponse,
  LoginData,
  LoginError,
  ActivateRequest,
  ActivateResponse,
} from "./auth.types";

export class AuthService {
  static async register(data: RegisterData): Promise<RegisterResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData: RegisterError = await response.json();
      throw new Error(errorData.message || "Ошибка регистрации");
    }
    return response.json();
  }

  static async login(data: LoginData): Promise<{ token: string; user: LoginResponse["user"] }> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData: LoginError = await response.json();
      throw new Error(errorData.message || "Ошибка авторизации");
    }

    const responseData: LoginResponse = await response.json();
    return {
      token: responseData.token,
      user: responseData.user,
    };
  }

  static async activate(data: ActivateRequest): Promise<ActivateResponse> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/activate?email=${data.email}`,
      { method: "GET" }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Ошибка при активации");
    }

    try {
      return await response.json();
    } catch {
      return { success: true, message: "Пароль отправлен на почту." };
    }
  }
}
