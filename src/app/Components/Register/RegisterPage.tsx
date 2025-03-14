"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth/auth.service";
import { RegisterData } from "@/services/auth/auth.types";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterData>({
    identificationNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (
        !formData.identificationNumber ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phoneNumber
      ) {
        alert("Все поля обязательны для заполнения.");
        return;
      }

      await AuthService.register(formData);
      await AuthService.activate({ email: formData.email });

      alert("Регистрация прошла успешно! Пароль отправлен на почту.");
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Неизвестная ошибка при регистрации");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Регистрация</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="identificationNumber">Идентификационный номер:</label>
          <input
            id="identificationNumber"
            type="text"
            placeholder="Введите идентификационный номер"
            value={formData.identificationNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">Имя:</label>
          <input
            id="firstName"
            type="text"
            placeholder="Введите имя"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Фамилия:</label>
          <input
            id="lastName"
            type="text"
            placeholder="Введите фамилию"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Введите email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Номер телефона:</label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Введите номер телефона"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
}
