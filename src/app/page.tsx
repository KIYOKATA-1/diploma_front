import React from "react";
import Header from "./Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-4xl">Welcome to Landing Page</h1>
      </main>
    </>
  );
}
