"use client";
import React from "react";
import MobileLanding from "../MobileLanding/page";
import Landing from "./page";
import useIsMobile from "@/hooks/useIsMobile";

export default function ResponsiveLanding() {
  const isMobile = useIsMobile();

  if (isMobile === null) return null;

  return isMobile ? <MobileLanding /> : <Landing />;
}
