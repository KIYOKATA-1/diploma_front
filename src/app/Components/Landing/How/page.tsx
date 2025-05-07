"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./how.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function How() {
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
      const steps = containerRef.current.querySelectorAll(`.${style.step}`);
  
      if (title) {
        tl.from(title, {
          opacity: 0,
          y: 50,
          duration: 1,
        });
      }
  
      if (steps.length > 0) {
        tl.from(
          steps,
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.3,
          },
          "-=0.3"
        );
      }
  
      ScrollTrigger.refresh();
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div className={style.container} ref={containerRef}>
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
