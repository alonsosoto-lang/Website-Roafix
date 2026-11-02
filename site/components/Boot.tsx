"use client";

import { useEffect } from "react";

export function Boot() {
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);
  return null;
}
