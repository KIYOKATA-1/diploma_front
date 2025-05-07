"use client";

import { useState, useEffect } from "react";

export interface UserData {
  username: string;
}

export interface SessionData {
  token: string;
  user: UserData;
}

export function useSession() {
  const [session, setSessionState] = useState<SessionData | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("session");
      return stored ? (JSON.parse(stored) as SessionData) : null;
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
