"use client";

import React from "react";
import styles from "./third.module.scss";
import Image from "next/image";

export default function Third() {
  const cardsData = [
    {
      id: 1,
      icon: "/shared/icons/one.svg",
      title: "Удобный интерфейс",
      description: "Интуитивное управление системой учета",
    },
    {
      id: 2,
      icon: "/shared/icons/two.svg",
      title: "Паспорт здоровья каждого животного",
      description: "Интуитивное управление системой учета",
    },
    {
      id: 3,
      icon: "/shared/icons/three.svg",
      title: "Полный учет поголовья",
      description: "Интуитивное управление системой учета",
    },
    {
      id: 4,
      icon: "/shared/icons/four.svg",
      title: "Напоминания о вакцинации",
      description: "Интуитивное управление системой учета",
    },
    {
      id: 5,
      icon: "/shared/icons/five.svg",
      title: "Доступ с любого устройства",
      description: "Интуитивное управление системой учета",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Возможности и преимущества системы</h1>
      
      <div className={styles.cards}>
        {cardsData.map((card) => (
          <div className={styles.card} key={card.id}>
            {/* Обёртка для иконки с position: relative, 
                чтобы корректно работал Image с fill */}
            <div className={styles.iconWrapper}>
              <Image
                src={card.icon}
                alt={`icon-${card.id}`}
                fill
                className={styles.cardIcon}
              />
            </div>

            <div className={styles.info}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
