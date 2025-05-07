"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Spinner from "./Components/Spinner/Spinner";

const ResponsiveLanding = dynamic(
  () => import("./Components/Landing/ResponsiveLanding"),
  { ssr: false }
);

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/main");
    }
  }, [loading, user, router]);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return null;
  }

  return <ResponsiveLanding />;
}
