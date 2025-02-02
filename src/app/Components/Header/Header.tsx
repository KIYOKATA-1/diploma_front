"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from './header.module.scss'

const Header = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => (event: React.MouseEvent) => {
    event.preventDefault(); // Отключает действие браузера по умолчанию
    router.push(path); 
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>LOGO</h1>
      <div className={styles.btnContainer}>
        <button
          className={styles.btnLogin}
          onClick={handleNavigation("/login")}
        >
          Login
        </button>
        <button
          className={styles.btnRegist}
          onClick={handleNavigation("/regist")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
