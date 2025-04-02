"use client";

import React, { useState } from "react";
import styles from "./MobileLanding.module.scss";
import Image from "next/image";
import MobileMenu from "../MobileMenu/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import StepsSlider from "./StepsSlider";
import Third from "./Third/page";
import Fourth from "./Fourth/page";
import Fifth from "./Fifth/page";

export default function MobileLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.mobileLanding}>
      <button
        className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <MobileMenu isOpen={isMenuOpen} />

      <section className={styles.first} id="first">
        <Image
          className={styles.bgImage}
          src="/assets/img/firstBg.svg"
          alt="bg"
          fill
        />
        <div className={styles.text}>
          <h1 className={styles.title}>Эффективный учет скота в один клик</h1>
          <p className={styles.subtitle}>
            Легко отслеживайте здоровье, вакцинации и данные о животных.
          </p>
        </div>
        <button className={styles.down}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </section>

      <section className={styles.second}>
        <h1>Как это работает? </h1>
        <StepsSlider />
      </section>

      <section className={styles.third} id="third">
        <Third />
      </section>

      <section className={styles.fourth}>
        <Fourth />
      </section>

      <section className={styles.fifth}>
        <Fifth />
      </section>

      <section className={styles.footer}>

      </section>
    </div>
  );
}
