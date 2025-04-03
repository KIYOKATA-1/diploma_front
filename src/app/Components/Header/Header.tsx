"use client";

import React from "react";
import styles from "./header.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logo.svg"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <ul className={styles.nav}>
        <li>
          <a href="#first" onClick={(e) => handleScroll(e, "first")}>
            Главная
          </a>
        </li>
        <li>
          <a href="#second" onClick={(e) => handleScroll(e, "second")}>
            Как это Работает?
          </a>
        </li>
        <li>
          <a href="#third" onClick={(e) => handleScroll(e, "third")}>
            Возможности
          </a>
        </li>
        <li>
          <a href="#reviews">Отзывы</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
      <div className={styles.buttons}>
        <button onClick={() => router.push("/register")}>
          Создать аккаунт
        </button>
        <button onClick={() => router.push("/login")}>Войти</button>
      </div>
    </div>
  );
}
