"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Spinner from "../Components/Spinner/Spinner";

export default function MainPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Добро пожаловать!</h1>
    </div>
  );
}
