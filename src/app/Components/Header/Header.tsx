"use client";

import React from "react";
import styles from "./header.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/whiteLogo.svg"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={() => router.push("/register")}>
          Создать аккаунт
        </button>
        <button onClick={() => router.push("/login")}>Войти</button>
      </div>
    </div>
  );
}
