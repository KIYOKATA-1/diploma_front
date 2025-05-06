"use client";

import React, { useState } from "react";
import styles from "./MobileFooter.module.scss";

const sections = [
  {
    title: "О системе",
    items: [
      "О нас",
      "Как работает система",
      "Для кого подходит",
      "Вопросы и ответы (FAQ)",
    ],
  },
  {
    title: "Юридическая информация",
    items: [
      "Условия использования",
      "Политика конфиденциальности",
      "Обработка персональных данных",
      "Пользовательское соглашение",
    ],
  },
  {
    title: "Связаться с нами",
    items: [
      "support@eanimal.kz",
      "+7 (777) 123-45-67",
      "Адрес: г. Алматы, ул. Примерная, 123",
    ],
  },
];

export default function MobileFooter() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className={styles.mobileFooter}>
      {sections.map((sec, idx) => (
        <div key={idx} className={styles.section}>
          <button
            className={styles.title}
            onClick={() => toggleSection(idx)}
            aria-expanded={openSection === idx}
          >
            {sec.title}
            <span
              className={`${styles.arrow} ${
                openSection === idx ? styles.open : ""
              }`}
            />
          </button>
          {openSection === idx && (
            <ul className={styles.list}>
              {sec.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className={styles.bottom}>
        © 2025 eAnimal. Все права защищены.
      </div>
    </footer>
  );
}
