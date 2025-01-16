"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthService } from "@/services/auth/auth.service";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordStep, setIsPasswordStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordSent, setPasswordSent] = useState(false);
  const router = useRouter();

  const handleRequestPassword = async () => {
    if (!email) {
      toast.error("Введите email.");
      return;
    }

    setLoading(true);
    try {
      const response = await AuthService.activate({ email });
      toast.success(response.message);
      setPasswordSent(true); 
      setIsPasswordStep(true);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Введите email и пароль.");
      return;
    }

    setLoading(true);
    try {
      const response = await AuthService.login({ email, password });
      document.cookie = `token=${response.token}; path=/`;
      toast.success("Успешная авторизация!");
      router.replace("/main");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Авторизация</h1>
      {passwordSent && ( 
        <p className="text-green-600 mb-4">
          Пароль отправлен на указанную почту.
        </p>
      )}
      <form
        onSubmit={isPasswordStep ? handleLogin : (e) => e.preventDefault()}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPasswordStep}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {isPasswordStep && (
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Пароль:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}
        <button
          type={isPasswordStep ? "submit" : "button"}
          onClick={!isPasswordStep ? handleRequestPassword : undefined}
          disabled={loading}
          className={`w-full px-4 py-2 rounded ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading
            ? isPasswordStep
              ? "Авторизация..."
              : "Запрос отправляется..."
            : isPasswordStep
            ? "Войти"
            : "Запросить пароль"}
        </button>
      </form>
    </div>
  );
}
