"use client";

import { useState, useEffect } from "react";

interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface SessionData {
  token: string;
  user: UserData;
}

export function useSession() {
  const [session, setSessionState] = useState<SessionData | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("session");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  useEffect(() => {
    if (session) {
      localStorage.setItem("session", JSON.stringify(session));
    } else {
      localStorage.removeItem("session");
    }
  }, [session]);

  function setSession(newSession: SessionData | null) {
    setSessionState(newSession);
  }

  return { session, setSession };
}
