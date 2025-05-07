"use client";

import React from "react";
import styles from "./header.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading || user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logoAnimal.png"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={() => router.push("/register")}>
          Создать аккаунт
        </button>
        <button onClick={() => router.push("/login")}>
          Войти
        </button>
      </div>
    </div>
  );
}
