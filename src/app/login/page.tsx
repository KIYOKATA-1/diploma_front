"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth/auth.service";
import Image from "next/image";
import style from "./login.module.scss";
import { useSession } from "@/hooks/useSession";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const router = useRouter();
  const { setSession } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
    <div className={style.wrapper}>
      <Image
        className={style.bgImage}
        src="/assets/img/authBg.svg"
        alt="bg"
        fill
      />

      <div className={style.form}>
        <Image
          className={style.logo}
          src="/assets/img/logo.png"
          alt="logo"
          width={100}
          height={100}
        />

        <form onSubmit={handleLogin}>
          <div className={style.inputGroup}>
            <input
              type="email"
              placeholder="Электронная почта"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={style.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className={style.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
