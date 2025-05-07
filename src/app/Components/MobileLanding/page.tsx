"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks/useAuth";
import MobileMenu from "@/app/Components/MobileMenu/MobileMenu";
import styles from "./MobileLanding.module.scss";
import StepsSlider from "./StepsSlider";
import Third from "./Third/page";
import Fourth from "./Fourth/page";
import Fifth from "./Fifth/page";
import MobileFooter from "./MobileFooter/MobileFooter";

export default function MobileLanding() {
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (loading) return null;
  if (user) return null; 

  return (
    <div className={styles.mobileLanding}>
      <button
        className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <MobileMenu isOpen={isMenuOpen} />

      <section className={styles.first} id="first">
        <Image
          src="/assets/img/firstBg.svg"
          alt="фон"
          fill
          className={styles.bgImage}
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
        <h2>Как это работает?</h2>
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

      <MobileFooter />
    </div>
  );
}
