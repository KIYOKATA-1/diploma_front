export interface Role {
  id: string;
  name: string;
}

export interface RegisterData {
  identificationNumber: string; // Идентификационный номер
  firstName: string; // Имя
  lastName: string; // Фамилия
  email: string; // Электронная почта
  phoneNumber: string; // Номер телефона
}


export interface RegisterResponse {
  success: boolean; // Успешность операции
  message: string; // Сообщение от сервера
  data?: RegisterData; // Зарегистрированные данные пользователя
}

export interface RegisterError {
  statusCode: number; // Код ошибки HTTP
  message: string; // Сообщение об ошибке
  errors?: string[]; // Дополнительные ошибки
}

export interface LoginData {
  email: string; // Email пользователя
  password: string; // Пароль пользователя
}

export interface LoginResponse {
  token: string; // Токен авторизации
  user: {
    id: string; // Идентификатор пользователя
    email: string; // Email пользователя
    firstName: string; // Имя пользователя
    lastName: string; // Фамилия пользователя
    role: string; // Роль пользователя
  };
}

export interface LoginError {
  statusCode: number; // Код ошибки HTTP
  message: string; // Сообщение об ошибке
  errors?: string[]; // Дополнительные ошибки
}

export interface ActivateRequest {
  email: string; // Email пользователя (обязательный)
}

export interface ActivateResponse {
  success: boolean; // Успешность операции
  message: string; // Сообщение от сервера
}
