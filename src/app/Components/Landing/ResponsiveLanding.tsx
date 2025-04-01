"use client";
import React, { useState, useEffect } from "react";
import MobileLanding from "../MobileLanding/page";
import Landing from "./page";

export default function ResponsiveLanding() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileLanding /> : <Landing />;
}
