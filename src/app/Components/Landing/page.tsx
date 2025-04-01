import React from "react";
import styles from "./landing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import How from "./How/page";
import Third from "./Third/page";
import Fourth from "./Fourth/page";
import Faq from "../Faq/page";
import Image from "next/image";
import Footer from "../Footer/page";

export default function Landing() {
  return (
    <div className={styles.container}>
      <section id="first" className={styles.first}>
      <Image
        className={styles.bgImage}
        src="/assets/img/firstBg.svg"
        alt="bg"
        fill
      />

        <h1 className={styles.title}>
          Эффективный учет скота <br /> В один клик!
        </h1>
        <h3 className={styles.subTitle}>
          Легко отслеживайте здоровье, вакцинации и данные о животных.
        </h3>
        <button className={styles.down}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </section>
      <section id="second" className={styles.second}>
        <How />
      </section>
      <section id="third" className={styles.third}>
        <Third />
      </section>
      <section className={styles.fourth}>
        <Fourth />
      </section>
      <section id="faq" className={styles.faq}>
        <Faq />
      </section>
      <section className={styles.footer}>
        <Footer/>
      </section>
    </div>
  );
}
