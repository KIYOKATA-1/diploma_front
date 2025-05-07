"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import styles from "./header.module.scss";

export default function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading || user) {
    return null;
  }

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logoAnimal.png"
          alt="logo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <nav className={styles.buttons}>
        <button onClick={() => router.push("/register")}>
          Создать аккаунт
        </button>
        <button onClick={() => router.push("/login")}>
          Войти
        </button>
      </nav>
    </header>
  );
}
