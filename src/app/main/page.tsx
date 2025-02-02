"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    // Проверка авторизации
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      router.replace("/"); // Если токена нет, перенаправляем на лендинг
    }
  }, [router]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl">Welcome to Main Page</h1>
      </div>
    </div>
  );
}

const Header = () => {
    const router = useRouter();
  
    const handleLogout = () => {
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      router.replace("/"); // Используем replace вместо push
    };
  
    return (
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <div>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={handleLogout}
          >
            Выйти
          </button>
        </div>
      </div>
    );
  };