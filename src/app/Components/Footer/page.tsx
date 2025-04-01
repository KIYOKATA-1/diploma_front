"use client";

import React from "react";
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.columns}>
        <div className={style.column}>
          <h4>О системе</h4>
          <ul>
            <li>О нас</li>
            <li>Как работает система</li>
            <li>Для кого подходит</li>
            <li>Вопросы и ответы (FAQ)</li>
          </ul>
        </div>
        <div className={style.column}>
          <h4>Юридическая информация</h4>
          <ul>
            <li>Условия использования</li>
            <li>Политика конфиденциальности</li>
            <li>Обработка персональных данных</li>
            <li>Пользовательское соглашение</li>
          </ul>
        </div>
        <div className={style.column}>
          <h4>Связаться с нами</h4>
          <ul>
            <li>support@eanimal.kz</li>
            <li>+7 (777) 123-45-67</li>
            <li>Адрес:</li>
          </ul>
        </div>
      </div>
      <div className={style.bottom}>
        © 2025 eAnimal. Все права защищены.
      </div>
    </footer>
  );
}
