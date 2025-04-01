"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./faq.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Faq: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      });
  
      const title = containerRef.current.querySelector("h1");
      const items = containerRef.current.querySelectorAll(`.${styles.listItem}`);
  
      if (title) {
        tl.from(title, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out",
        });
      }
  
      if (items.length > 0) {
        tl.from(
          items,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=0.5"
        );
      }
  
      ScrollTrigger.refresh();
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  
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
    <div className={styles.container} ref={containerRef}>
      <div className={styles.faqImageWrapper}>
        <Image
          className={styles.faqImage}
          src="/assets/img/faqRight.svg"
          alt="bg"
          fill
          priority
        />
      </div>

      <div className={styles.content}>
        <h1>Часто задаваемые вопросы</h1>
        <ul className={styles.list}>
          {questions.map((question, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.icon}>
                <Image
                  src="/shared/icons/faq.svg"
                  alt="arrow"
                  width={30}
                  height={30}
                />
              </div>
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
