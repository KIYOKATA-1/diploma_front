"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/Components/MobileLanding/MobileLanding.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" }
      );
    } else if (!isOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`${styles.fullscreenMenu} ${isOpen ? styles.visible : ""}`}
    >
      <div className={styles.menuContent}>
        <div className={styles.logo}>
          <Image
            src="/assets/img/mobileLogo.svg"
            alt="logo"
            className={styles.logoImage}
            width={71}
            height={71}
          />
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
  );
}
