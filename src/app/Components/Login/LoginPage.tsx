"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth/auth.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "@/hooks/useSession";

export default function LoginPage() {
  const router = useRouter();
  const { setSession } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Введите email и пароль.");
      return;
    }

    setLoading(true);
    try {
      const response = await AuthService.login({ email, password });
      setSession({
        token: response.token,
        user: response.user,
      });
      toast.success("Успешная авторизация!");
      router.replace("/main");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Неизвестная ошибка при авторизации");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1>Авторизация</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            placeholder="Пароль из письма"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Авторизация..." : "Войти"}
        </button>
      </form>

      {!loading && (
        <div style={{ marginTop: "1rem" }}>
          <p>Нет аккаунта?</p>
          <Link href="/register">Зарегистрироваться</Link>
        </div>
      )}
    </div>
  );
}
