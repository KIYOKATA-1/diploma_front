"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./main.module.scss";
import Spinner from "../Components/Spinner/Spinner";
import Sidebar from "../Components/Sidebar/Sidebar";
import AddAnimalPortal from "../Components/AddAnimal/AddAnimal";

export default function MainPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAddAnimalOpen, setAddAnimalOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  if (loading) return <Spinner />;
  if (!user) return null;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button
            className={styles.burgerButton}
            onClick={() => setSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button className={styles.filterButton}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div>
          <button
            className={styles.addButton}
            onClick={() => setAddAnimalOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} className={styles.addIcon} />
            <span className={styles.addText}>Добавить животное</span>
          </button>
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <AddAnimalPortal
        isOpen={isAddAnimalOpen}
        onClose={() => setAddAnimalOpen(false)}
      />

      <main className={styles.main}>
        <h1>MAIN</h1>
      </main>
    </div>
  );
}
