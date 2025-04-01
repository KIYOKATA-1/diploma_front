"use client";

import React, { useState, useEffect } from "react";
import Landing from "./Components/Landing/page";
import Header from "./Components/Header/Header";
import ResponsiveLanding from "./Components/Landing/ResponsiveLanding";

export default function Main() {
  return (
    <div>
      <section>
        <ResponsiveLanding />
      </section>
    </div>
  );
}
