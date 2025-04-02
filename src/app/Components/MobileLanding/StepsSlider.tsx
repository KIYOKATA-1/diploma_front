"use client";

import React from "react";
import styles from "./StepsSlider.module.scss";

const steps = [
  {
    number: "01",
    title: "Регистрация",
    description: "Создайте аккаунт и добавьте своих животных.",
  },
  {
    number: "02",
    title: "Учет животных",
    description: "Фиксируйте данные о здоровье, вакцинации и других параметрах.",
  },
  {
    number: "03",
    title: "Уведомления",
    description: "Получайте напоминания о вакцинациях и обследованиях.",
  },
  {
    number: "04",
    title: "Мониторинг",
    description: "Следите за состоянием животных в удобной панели управления.",
  },
];

export default function StepsSlider() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {steps.map((step, index) => (
          <div className={styles.stepBlock} key={index}>
            <div className={styles.card}>
              <div className={styles.number}>{step.number}</div>
              <div className={styles.title}>{step.title}</div>
              <div className={styles.description}>{step.description}</div>
            </div>
            {index < steps.length - 1 && (
              <div className={styles.line}>
                <span className={styles.dot} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
