"use client";

import React from "react";
import useIsMobile from "@/hooks/useIsMobile";
import MobileLanding from "@/app/Components/MobileLanding/page";
import Landing from "@/app/Components/Landing/page";

export default function ResponsiveLanding() {
  const isMobile = useIsMobile();

  if (isMobile === null) {
    return null; 
  }

  return isMobile ? <MobileLanding /> : <Landing />;
}
