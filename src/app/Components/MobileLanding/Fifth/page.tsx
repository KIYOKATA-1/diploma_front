"use client";

import React from "react";
import styles from "./fifth.module.scss";
import Image from "next/image";

export default function Fifth() {
  const questionsData = [
    { id: 1, title: "Какие устройства поддерживаются?" },
    { id: 2, title: "Как работает система учета скота?" },
    { id: 3, title: "Насколько безопасны мои данные?" },
    { id: 4, title: "Кто имеет доступ к информации о моих животных?" },
    { id: 5, title: "Система платная или бесплатная?" },
    { id: 6, title: "Какие способы оплаты поддерживаются?" },
    { id: 7, title: "Как связаться с поддержкой, если возникнут вопросы?" },
    { id: 8, title: "Можно ли интегрировать систему с другими сервисами?" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {/* Ставим fill, чтобы размеры задавались через CSS */}
        <Image
          className={styles.fifthImage}
          src="/assets/img/mobileFourth.svg"
          alt="bg"
          fill
          priority
        />
      </div>

      <h1 className={styles.title}>Часто задаваемые вопросы</h1>

      <div className={styles.questionsList}>
        {questionsData.map((question) => (
          <div className={styles.questionCard} key={question.id}>
            <div className={styles.iconWrapper}>
              <Image
                src="/shared/icons/faq.svg"
                alt="arrow"
                fill
                className={styles.icon}
              />
            </div>
            <span className={styles.questionText}>{question.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
