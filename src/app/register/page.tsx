"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import style from "./register.module.scss";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthService } from "@/services/auth/auth.service";

export default function RegisterPage() {
  const router = useRouter();

  const [iin, setIin] = useState("");
  const [phone, setPhone] = useState("+7");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleIinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 12) setIin(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith("+7")) {
      val = "+7" + val.replace(/^\+?7?/, "");
    }
    const cleaned = "+7" + val.slice(2).replace(/\D/g, "");
    if (cleaned.length <= 12) setPhone(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (iin.length !== 12) {
      toast.error("ИИН должен состоять из 12 цифр");
      return;
    }
    if (!/^\+7\d{10}$/.test(phone)) {
      toast.error("Телефон должен начинаться с +7 и содержать 11 цифр");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Введите корректный email");
      return;
    }
    if (!firstName.trim()) {
      toast.error("Введите имя");
      return;
    }
    if (!lastName.trim()) {
      toast.error("Введите фамилию");
      return;
    }
    if (!password) {
      toast.error("Введите пароль");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Пароли не совпадают");
      return;
    }

    setLoading(true);
    try {
      const resp = await AuthService.register({
        identificationNumber: iin,
        firstName,
        lastName,
        email,
        phoneNumber: phone,
      });
      toast.success(resp.message || "Регистрация прошла успешно");
      router.push(`/activate?email=${encodeURIComponent(email)}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ошибка при регистрации";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <Image
        src="/assets/img/authBg.svg"
        alt="фон"
        fill
        className={style.bgImage}
      />

      <div className={style.form}>
        <Image
          src="/assets/img/logo.png"
          alt="логотип"
          width={100}
          height={100}
          className={style.logo}
        />

        <form onSubmit={handleSubmit}>
          <div className={style.nameRow}>
            <div className={style.inputGroup}>
              <input
                type="text"
                placeholder="Имя"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={style.inputGroup}>
              <input
                type="text"
                placeholder="Фамилия"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className={style.inputGroup}>
            <input
              type="text"
              placeholder="ИИН/БИН"
              required
              value={iin}
              onChange={handleIinChange}
              pattern="\d{12}"
              title="12 цифр"
            />
          </div>

          <div className={style.inputGroup}>
            <input
              type="tel"
              placeholder="Номер телефона"
              required
              value={phone}
              onChange={handlePhoneChange}
              pattern="^\+7\d{10}$"
              title="+7 и 10 цифр"
            />
          </div>

          <div className={style.inputGroup}>
            <input
              type="email"
              placeholder="Электронная почта"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={style.togglePassword}
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className={style.inputGroup}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Подтвердите пароль"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className={style.togglePassword}
              onClick={() => setShowConfirmPassword((v) => !v)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className={style.checkboxContainer}>
            <input type="checkbox" id="accept" required />
            <label htmlFor="accept">
              Я принимаю{" "}
              <a href="#" target="_blank" rel="noreferrer">
                условия использования
              </a>{" "}
              и{" "}
              <a href="#" target="_blank" rel="noreferrer">
                политику конфиденциальности
              </a>
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Отправка..." : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
}
