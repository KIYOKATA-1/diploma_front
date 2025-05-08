"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./AddAnimal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type AddAnimalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddAnimalPortal({ isOpen, onClose }: AddAnimalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.body;
    modalRoot.appendChild(elRef.current!);
    setMounted(true);
    return () => {
      if (modalRoot.contains(elRef.current!)) {
        modalRoot.removeChild(elRef.current!);
      }
    };
  }, []);

  useEffect(() => {
    if (mounted && isOpen) {
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(false);
    }
  }, [isOpen, mounted]);

  if (!isOpen || !mounted) return null;

  return ReactDOM.createPortal(
    <div
      className={`${styles.overlay} ${animate ? styles.overlayOpen : ""}`}
    >
      <div className={`${styles.modal} ${animate ? styles.modalOpen : ""}`}>
        <div className={styles.top}>
          <button
            className={styles.closeButton}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <h1 className={styles.title}>Добавление животного</h1>
        </div>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label>ИНЖ ID:</label>
              <input type="text" placeholder="ИНЖ ID" />
            </div>
            <div className={styles.field}>
              <label>Вид животного:</label>
              <select>
                <option value="">Выберите вид</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label>Состояние здоровья:</label>
              <select>
                <option value="">Состояние здоровья</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Статус вакцинации:</label>
              <select>
                <option value="">Статус вакцинации</option>
              </select>
            </div>
          </div>

          <div className={styles.passportTitle}>Паспорт здоровья животного</div>

          <div className={styles.fieldVertical}>
            <label>История вакцинации:</label>
            <input type="text" />
          </div>
          <div className={styles.fieldVertical}>
            <label>Пройденные медицинские обследования:</label>
            <input type="text" />
          </div>
          <div className={styles.fieldVertical}>
            <label>Пройденные процедуры:</label>
            <input type="text" />
          </div>
          <div className={styles.fieldVertical}>
            <label>Другие важные медицинские данные:</label>
            <input type="text" />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.submitButton}>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>,
    elRef.current
  );
}
