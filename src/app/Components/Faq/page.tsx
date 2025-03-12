import React from "react";
import Image from "next/image";
import styles from './faq.module.scss'
const Faq: React.FC = () => {
  const questions = [
    "Как работает система учета скота?",
    "Какие устройства поддерживаются?",
    "Насколько безопасны мои данные?",
    "Кто имеет доступ к информации о моих животных?",
    "Система платная или бесплатная?",
    "Какие способы оплаты поддерживаются?",
    "Куда обратиться по консультации, если возникнут вопросы?",
    "Можно ли интегрировать систему с другими сервисами?",
  ];

  return (
    <div className={styles.container}>
      <h1>Часто задаваемые вопросы</h1>
      <ul className={styles.list}>
        {questions.map((question, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.icon}>
              <Image
                src="/shared/icons/faq.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </div>
            <span>{question}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
