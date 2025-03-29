"use client";

import React, { useState } from "react";
import style from "./register.module.scss";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth/auth.service";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [iin, setIin] = useState<string>("");
  const [phone, setPhone] = useState<string>("+7");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleIinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 12) {
      setIin(value);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+7")) {
      value = "+7" + value.replace(/^\+?7?/, "");
    }
    const formatted = "+7" + value.slice(2).replace(/\D/g, "");
    if (formatted.length <= 12) {
      setPhone(formatted);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (iin.length !== 12) {
      toast.error("ИИН должен состоять из 12 цифр");
      return;
    }

    const phoneRegex = /^\+7\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Номер телефона должен начинаться с +7 и содержать 11 цифр");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Пожалуйста, введите корректный адрес электронной почты");
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

    try {
      const registerResponse = await AuthService.register({
        identificationNumber: iin,
        firstName,
        lastName,
        email,
        phoneNumber: phone,
      });
      toast.success(registerResponse.message || "Регистрация прошла успешно");
      
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message || "Ошибка при регистрации");
    }
  };

  return (
    <div className={style.wrapper}>
      <Image
        className={style.bgImage}
        src="/assets/img/authBg.svg"
        alt="bg"
        fill
      />

      <div className={style.form}>
        <Image
          className={style.logo}
          src="/assets/img/logo.png"
          alt="logo"
          width={100}
          height={100}
        />

        <form onSubmit={handleSubmit}>
          <div className={style.userInfo}>
            <div className={style.nameRow}>
              <div className={style.inputGroup}>
                <input
                  type="text"
                  placeholder="Имя"
                  required
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className={style.inputGroup}>
                <input
                  type="text"
                  placeholder="Фамилия"
                  required
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
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
              title="ИИН должен состоять из 12 цифр"
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
              title="Номер должен начинаться с +7 и содержать 11 цифр"
            />
          </div>
          <div className={style.inputGroup}>
            <input
              type="email"
              placeholder="Электронная почта"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={style.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className={style.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className={style.inputGroup}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Подтвердите пароль"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span
              className={style.togglePassword}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className={style.checkboxContainer}>
            <input type="checkbox" id="accept" required />
            <label htmlFor="accept">
              Я принимаю <a href="#">условия использования</a> и{" "}
              <a href="#">политику конфиденциальности</a>
            </label>
          </div>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
