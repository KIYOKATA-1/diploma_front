"use client";

import React from "react";
import styles from "./landing.module.scss";
import Login from "./login/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.centeredBlock}>
          <Login />
        </div>
      </div>
      <div className={styles.rightSection}></div>
    </div>
  );
}
