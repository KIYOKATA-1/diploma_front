"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthService } from "@/services/auth/auth.service";
import styles from "./login.module.scss";
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
    <div className={styles.container}>
      <h1 className={styles.title}>Авторизация</h1>
      {passwordSent && (
        <p className={styles.successMessage}>
          Пароль отправлен на указанную почту.
        </p>
      )}
      <form
        onSubmit={isPasswordStep ? handleLogin : (e) => e.preventDefault()}
        className={styles.form}
      >
        <div className={styles.inputGroup}>
          <input
            id="email"
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPasswordStep}
            className={styles.input}
          />
        </div>
        {isPasswordStep && (
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Пароль:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
        )}
        <button
          type={isPasswordStep ? "submit" : "button"}
          onClick={!isPasswordStep ? handleRequestPassword : undefined}
          disabled={loading}
          className={`${styles.button} ${loading ? styles.disabled : ""}`}
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
