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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  type LoginError = { error?: string; message?: string };

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
    } catch (err: unknown) {
      let msg = "Неизвестная ошибка при авторизации";
      if (typeof err === "object" && err !== null) {
        const e = err as LoginError;
        msg = e.error ?? e.message ?? msg;
      }
      toast.error(msg);
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
