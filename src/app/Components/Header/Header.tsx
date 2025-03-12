"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <li>
          <a href="">Главная</a>
        </li>
        <li>
          <a href="">Как это Работает?</a>
        </li>
        <li>
          <a href="">Возможности</a>
        </li>
        <li>
          <a href="">Отзывы</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Контакты</a>
        </li>
      </ul>
      <div className={styles.buttons}>
        <button>Создать аккаунт</button>
        <button>Войти</button>

      </div>
    </div>
  );
}
