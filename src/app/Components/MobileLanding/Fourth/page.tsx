"use client";

import React from "react";
import styles from "./fourth.module.scss";

export default function Fourth() {
  const cardsData = [
    {
      id: 1,
      title: "Фермерские хозяйства",
    },
    {
      id: 2,
      title: "Ветеринарные клиники",
    },
    {
      id: 3,
      title: "Сельскохозяйственные компании",
    },
    {
      id: 4,
      title: "Владельцы КРС (Крупного Рогатого Скота)",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Кому подойдёт система?</h1>
      
      <div className={styles.cards}>
        {cardsData.map((card) => (
          <div className={styles.card} key={card.id}>
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
