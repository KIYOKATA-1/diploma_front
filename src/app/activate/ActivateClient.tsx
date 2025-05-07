"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./activate.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthService } from "@/services/auth/auth.service";

export default function ActivateClient() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") ?? "";
  const [loading, setLoading] = useState(false);

  type ActivateError = { error?: string; message?: string };

  const handleActivate = async () => {
    setLoading(true);
    try {
      await AuthService.activate(email);
      toast.success("Пароль отправлен на почту. Перенаправляю на вход...");
      router.push("/login");
    } catch (err: unknown) {
      let message = "Не удалось активировать аккаунт";
      if (typeof err === "object" && err !== null) {
        const e = err as ActivateError;
        message = e.error ?? e.message ?? message;
      }
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h1>Активация аккаунта</h1>
        <p>
          На почту <strong>{email}</strong> придёт пароль для входа — проверьте
          папку «Спам».
        </p>
        <button onClick={handleActivate} disabled={loading}>
          {loading ? "Отправляем..." : "Активировать аккаунт"}
        </button>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
}
