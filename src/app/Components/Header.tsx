"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => (event: React.MouseEvent) => {
    event.preventDefault(); // Отключает действие браузера по умолчанию
    router.push(path); // Перенаправление на указанный путь
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#353B48]">
      <h1>LOGO</h1>
      <div>
        <button
          className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleNavigation("/login")}
        >
          Login
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleNavigation("/regist")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
