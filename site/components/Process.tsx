"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Street } from "./Street";

const stages = [
  {
    name: "Detectar",
    title: "Detectar el bache",
    body: "Una persona lo ve en la calle, caminando o al volante.",
    view: "detect",
  },
  {
    name: "Reportar",
    title: "Enviar foto y lugar",
    body: "Con una cuenta, manda la fotografía, el GPS y qué tan grave se ve.",
    view: "report",
  },
  {
    name: "Conectar",
    title: "Sumarlo al mapa",
    body: "El reporte pendiente queda visible, con severidad y confirmaciones de otras personas.",
    view: "share",
  },
  {
    name: "Atender",
    title: "Seguir el estado",
    body: "La autoridad puede actualizarlo a resuelto. No hay aviso automático ni una fecha prometida.",
    view: "status",
  },
] as const;

export function Process() {
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);
  const reduce = useReducedMotion();
  const stage = stages[index];
  const go = (next: number) => {
    setMoved(true);
    setIndex(next);
  };
  const animate = moved && !reduce;

  return (
    <div className="stage">
      <div className="stage-copy">
        <div className="steps" role="tablist" aria-label="Cuatro momentos">
          {stages.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-controls="paso-actual"
              onClick={() => go(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div id="paso-actual" role="tabpanel" aria-live="polite">
          <h3>{stage.title}</h3>
          <p className="lead">{stage.body}</p>
        </div>
        <div className="track">
          <label className="sr" htmlFor="pasos">
            Recorrer los cuatro momentos
          </label>
          <input
            id="pasos"
            type="range"
            min={0}
            max={3}
            step={1}
            value={index}
            onChange={(event) => go(Number(event.target.value))}
          />
        </div>
      </div>
      <motion.div
        key={stage.view}
        className="stage-view"
        initial={animate ? { opacity: 0, y: 12 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animate ? 0.4 : 0, ease: [0.16, 1, 0.3, 1] }}
      >
        {stage.view === "detect" ? <Street /> : null}
        {stage.view === "report" ? (
          <div className="report" data-ui>
            <header>
              <strong>Reportar</strong>
              <span className="tag">Foto y GPS</span>
            </header>
            <div className="photo">Fotografía tomada en la calle</div>
            <p>La cuenta es necesaria para enviar. Sin internet, el reporte espera en el teléfono.</p>
          </div>
        ) : null}
        {stage.view === "share" ? <Street /> : null}
        {stage.view === "status" ? (
          <div className="report" data-ui>
            <header>
              <strong>Mis reportes</strong>
              <span className="tag">Pendiente</span>
            </header>
            <p>El mapa público enseña los pendientes. Un reporte resuelto sale de esa vista.</p>
            <p>Marcarlo resuelto no envía una notificación a quien lo reportó.</p>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
