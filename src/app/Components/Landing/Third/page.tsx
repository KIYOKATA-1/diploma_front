"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./third.module.scss";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Third() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    // Анимация заголовка
    tl.from(containerRef.current.querySelector(`.${style.title}`), {
      opacity: 0,
      y: 50,
      duration: 1,
    });

    // Анимация карточек с последовательным появлением
    const cards = containerRef.current.querySelectorAll(`.${style.card}`);
    tl.from(
      cards,
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.3"
    );
  }, []);

  return (
    <div className={style.container} ref={containerRef}>
      <h1 className={style.title}>Возможности и преимущества системы</h1>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.icon}>
            <Image
              alt="one"
              src={"/shared/icons/one.svg"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={style.info}>
            <h3 className={style.title}>Удобный интерфейс</h3>
            <p className={style.description}>
              Интуитивное управление системой учета
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <Image
              alt="two"
              src={"/shared/icons/two.svg"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={style.info}>
            <h3 className={style.title}>
              Паспорт здоровья каждого животного
            </h3>
            <p className={style.description}>Цифровые медицинские записи </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <Image
              alt="three"
              src={"/shared/icons/three.svg"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={style.info}>
            <h3 className={style.title}>Полный учет поголовья</h3>
            <p className={style.description}>
              Отслеживание всех данных по скоту
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <Image
              alt="four"
              src={"/shared/icons/four.svg"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={style.info}>
            <h3 className={style.title}>Напоминания о вакцинации</h3>
            <p className={style.description}>
              Автоматические оповещения для фермеров
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <Image
              alt="five"
              src={"/shared/icons/five.svg"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={style.info}>
            <h3 className={style.title}>Доступ с любого устройства</h3>
            <p className={style.description}>Кроссплатформенный доступ </p>
          </div>
        </div>
      </div>
    </div>
  );
}
