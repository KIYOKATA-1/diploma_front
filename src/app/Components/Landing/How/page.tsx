import React from "react";
import style from './how.module.scss';

export default function How() {
  return (
    <div className={style.container}>
      <h1>Как это работает?</h1>
      <div className={style.steps}>
        <div className={style.step}>
          <span className={style.stepNumber}>01</span>
          <div className={style.stepContent}>
            <h3 className={style.title}>Регистрация</h3>
            <p className={style.subtitle}>
              Создайте аккаунт и <br /> добавьте своих животных.
            </p>
          </div>
        </div>
        <div className={style.step}>
          <span className={style.stepNumber}>02</span>
          <div className={style.stepContent}>
            <h3 className={style.title}>Учет животных</h3>
            <p className={style.subtitle}>
              Фиксируйте данные о здоровье, <br /> вакцинации и других параметрах.
            </p>
          </div>
        </div>
        <div className={style.step}>
          <span className={style.stepNumber}>03</span>
          <div className={style.stepContent}>
            <h3 className={style.title}>Уведомления</h3>
            <p className={style.subtitle}>
              Получайте напоминания о <br /> вакцинациях и обследованиях.
            </p>
          </div>
        </div>
        <div className={style.step}>
          <span className={style.stepNumber}>04</span>
          <div className={style.stepContent}>
            <h3 className={style.title}>Мониторинг</h3>
            <p className={style.subtitle}>
              Следите за состоянием животных в <br /> удобной панели управления.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
