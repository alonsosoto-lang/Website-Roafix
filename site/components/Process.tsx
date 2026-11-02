"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Street } from "./Street";

const stages = [
  {
    title: "Detectar el bache",
    body: "Una persona lo ve en la calle, caminando o al volante.",
    view: "detect",
  },
  {
    title: "Enviar foto y lugar",
    body: "Con una cuenta, manda la fotografía, el GPS y qué tan grave se ve.",
    view: "report",
  },
  {
    title: "Sumarlo al mapa",
    body: "El reporte pendiente queda visible, con severidad y confirmaciones de otras personas.",
    view: "share",
  },
  {
    title: "Seguir el estado",
    body: "Puede seguir pendiente o marcarse resuelto. No hay aviso automático ni una fecha prometida.",
    view: "status",
  },
] as const;

export function Process() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const stage = stages[index];

  return (
    <div className="stage-copy">
      <div>
        <h2 id="enfoque">{stage.title}</h2>
        <p className="lead">{stage.body}</p>
      </div>
      <motion.div
        key={stage.view}
        className="stage-view"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {stage.view === "detect" ? <Street /> : null}
        {stage.view === "report" ? (
          <div className="report" data-ui>
            <header>
              <strong>Reportar</strong>
              <span>Foto y GPS</span>
            </header>
            <div className="photo">Fotografía tomada en la calle</div>
            <p>La cuenta es necesaria para enviar. Sin internet, el reporte espera en el teléfono.</p>
          </div>
        ) : null}
        {stage.view === "share" ? (
          <div data-ui style={{ minHeight: "22rem", display: "grid" }}>
            <Street />
          </div>
        ) : null}
        {stage.view === "status" ? (
          <div className="report" data-ui>
            <header>
              <strong>Mis reportes</strong>
              <span className="status">Pendiente</span>
            </header>
            <p>El mapa público enseña los pendientes. Un reporte resuelto sale de esa vista.</p>
            <p>Marcarlo resuelto no envía una notificación a quien lo reportó.</p>
          </div>
        ) : null}
      </motion.div>
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
          onChange={(event) => setIndex(Number(event.target.value))}
        />
        <div className="names">
          {stages.map((item, i) => (
            <span key={item.title} data-on={i === index}>
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
