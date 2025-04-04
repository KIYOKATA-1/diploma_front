"use client";

import React from "react";
import dynamic from "next/dynamic";

const ResponsiveLanding = dynamic(
  () => import("./Components/Landing/ResponsiveLanding"));

export default function Main() {
  return (
    <div>
      <section>
        <ResponsiveLanding />
      </section>
    </div>
  );
}
