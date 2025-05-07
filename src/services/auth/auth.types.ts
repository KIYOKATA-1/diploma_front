export interface Role {
  id: string;
  name: string;
}

export interface RegisterData {
  identificationNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data?: RegisterData;
}

export interface RegisterError {
  statusCode: number;
  message: string;
  errors?: string[];
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  accessToken: string;
}

export interface LoginError {
  statusCode: number;
  message: string;
  errors?: string[];
}

export interface ActivateRequest {
  email: string;
}

export interface ActivateResponse {
  success: boolean;
  message: string;
}
