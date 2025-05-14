"use client";

import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faList, faUser } from "@fortawesome/free-solid-svg-icons";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { logout } = useAuth();
  const router = useRouter();

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
      {/* затемнённый фон */}
      <div
        className={`${styles.backdrop} ${
          isOpen ? styles.backdropOpen : ""
        }`}
        onClick={onClose}
      />

      {/* сам сайдбар */}
      <aside
        className={`${styles.sidebar} ${
          isOpen ? styles.open : ""
        }`}
      >
        {/* логотип */}
        <div className={styles.logoContainer}>
          <Image
            src="/assets/img/logoAnimal.png"
            alt="Логотип"
            width={80}
            height={80}
            className={styles.logo}
          />
        </div>

        {/* пункты меню */}
        <nav className={styles.nav}>
          <ul>
            {[
              { icon: faUser, label: "Мой кабинет", to: "/profile" },
              { icon: faList, label: "Список Животных", to: "/animals" },
              { icon: faBell, label: "Уведомления", to: "/notifications" },
            ].map(({ icon, label, to }) => (
              <li key={label} onClick={() => router.push(to)}>
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          Выйти
        </button>
      </aside>
    </>
  );
}
