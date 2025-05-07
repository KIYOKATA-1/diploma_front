"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import style from "./main.module.scss";

export default function MainPage() {
  const router = useRouter();
  const { session } = useSession();

  useEffect(() => {
    if (!session || !session.user) {
      router.replace("/login");
    }
  }, [session, router]);

  if (!session || !session.user) {
    return null;
  }

  const username = session.user.username;

  return (
    <div className={style.container}>
      <h1>Добро пожаловать, {username}!</h1>
    </div>
  );
}
