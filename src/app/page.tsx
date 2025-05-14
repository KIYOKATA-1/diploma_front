"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import ResponsiveLanding from "./Components/Landing/ResponsiveLanding";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/main");
    }
  }, [user, router]);

  if (user) {
    return null;
  }

  return <ResponsiveLanding />;
}
