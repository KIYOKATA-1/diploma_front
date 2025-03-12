"use client";

import React, { useState, useEffect } from "react";
import Landing from "./Components/Landing/page";
import Header from "./Components/Header/Header";

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div >
        <h1>This page is not available for mobile devices</h1>
      </div>
    );
  }
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Landing />
      </section>
    </div>
  );
}
