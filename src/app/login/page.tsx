"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import style from "./login.module.scss";
import { useAuth } from "@/hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Введите email и пароль.");
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Успешная авторизация!");
      router.replace("/main");
    } catch (err: any) {
      toast.error(err.error || err.message || "Неизвестная ошибка при авторизации");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <Image
        src="/assets/img/authBg.svg"
        alt="фон"
        fill
        className={style.bgImage}
      />

      <div className={style.form}>
        <Image
          src="/assets/img/logo.png"
          alt="logo"
          width={100}
          height={100}
          className={style.logo}
        />

        <form onSubmit={handleLogin}>
          <div className={style.inputGroup}>
            <input
              type="email"
              placeholder="Электронная почта"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={style.togglePassword}
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>
      </div>

      <ToastContainer position="bottom-center" />
    </div>
  );
}
