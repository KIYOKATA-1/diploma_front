import { RegisterData, RegisterResponse, RegisterError, LoginResponse, LoginData, LoginError, ActivateRequest, ActivateResponse } from "./auth.types";

export class AuthService {
  static async register(data: RegisterData): Promise<RegisterResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData: RegisterError = await response.json();
      throw new Error(errorData.message || "Ошибка регистрации");
    }

    const responseData: RegisterResponse = await response.json();
    return responseData;
  }
  static async login(data: LoginData): Promise<LoginResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData: LoginError = await response.json();
      throw new Error(errorData.message || "Ошибка авторизации");
    }

    const responseData: LoginResponse = await response.json();
    return responseData;
  }

  static async activate(data: ActivateRequest): Promise<ActivateResponse> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/activate?email=${data.email}`,
      {
        method: "GET",
      }
    );
  
    if (!response.ok) {
      const errorText = await response.text(); // Обработка текста
      throw new Error(errorText || "Ошибка при активации");
    }
  
    try {
      const responseData: ActivateResponse = await response.json();
      return responseData;
    } catch {
      // Если ответ - текст, возвращаем success = true и сообщение
      return { success: true, message: "Пароль отправлен на почту." };
    }
  }
  
}
