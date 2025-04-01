"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./MobileLanding.module.scss";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function MobileLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" }
      );
    } else if (!isMenuOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

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

      <div
        ref={menuRef}
        className={`${styles.fullscreenMenu} ${isMenuOpen ? styles.visible : ""}`}
      >
        <div className={styles.menuContent}>
          <div className={styles.logo}>
            <Image src="/assets/img/mobileLogo.svg" alt="logo" className={styles.logoImage} />
            <p>eAnimal</p>
          </div>
          <button className={styles.button} onClick={() => router.push("/register")}>
            Создать аккаунт
          </button>
          <button className={styles.button} onClick={() => router.push("/login")}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}
