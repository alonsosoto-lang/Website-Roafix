"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const names = ["Pendiente", "Resuelto", "Millennium Fellowship", "Objetivo 11"] as const;

export function Proof() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setOn((n) => (n + 1) % names.length), 2000);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <p className="sentence" id="mision">
      Un reporte público está{" "}
      <span className="wait" data-on={reduce || on === 0}>Pendiente</span> o pasa a{" "}
      <span className="wait" data-on={reduce || on === 1}>Resuelto</span>. Roafix participa en el{" "}
      <span className="wait" data-on={reduce || on === 2}>Millennium Fellowship</span> Class of 2026,
      alineado con el <span className="wait" data-on={reduce || on === 3}>Objetivo 11</span>,
      Ciudades y comunidades sostenibles.
    </p>
  );
}
