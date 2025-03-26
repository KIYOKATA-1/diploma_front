"use client";

import React from "react";
import styles from "./header.module.scss";

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
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
        <button>Создать аккаунт</button>
        <button>Войти</button>
      </div>
    </div>
  );
}
