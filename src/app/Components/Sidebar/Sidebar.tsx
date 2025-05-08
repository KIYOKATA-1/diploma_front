"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faList, faUser } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { logout } = useAuth();
  const router = useRouter();

  const sidebarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const tl = useRef(gsap.timeline({ paused: true }));

  itemsRef.current = [];

  useEffect(() => {
    if (!sidebarRef.current || !logoRef.current) return;

    if (tl.current.duration() === 0) {
      tl.current
        .from(sidebarRef.current, { xPercent: -100, duration: 0.3 })
        .from(logoRef, { autoAlpha: 0, y: -20, duration: 0.4 })
        .from(
          itemsRef.current,
          { autoAlpha: 0, x: -20, duration: 0.3, stagger: 0.1 },
          "-=0.2"
        )
        .from(
          sidebarRef.current.querySelector(`.${styles.logoutButton}`),
          { autoAlpha: 0, y: 20, duration: 0.5 },
          "-=0.1"
        );
    }

    if (isOpen) {
      tl.current.timeScale(1).play();
    } else {
      tl.current.timeScale(2).reverse();
    }
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Ошибка при логауте:", err);
    } finally {
      onClose();
      router.replace("/");
    }
  };

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
      />
      <aside
        ref={sidebarRef}
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      >
        <div ref={logoRef} className={styles.logoContainer}>
          <Image
            src="/assets/img/logoAnimal.png"
            alt="Логотип"
            width={80}
            height={80}
            className={styles.logo}
          />
        </div>

        <nav className={styles.nav}>
          <ul>
            {[
              { icon: faUser, label: "Мой кабинет", to: "/profile" },
              { icon: faList, label: "Список Животных", to: "/animals" },
              { icon: faBell, label: "Уведомления", to: "/notifications" },
            ].map(({ icon, label, to }) => (
              <li
                key={label}
                ref={(el) => {
                  if (el) itemsRef.current.push(el);
                }}
                onClick={() => router.push(to)}
              >
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <button className={styles.logoutButton} onClick={handleLogout}>
          Выйти
        </button>
      </aside>
    </>
  );
}
