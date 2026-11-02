"use client";

import { useState } from "react";

const examples = [
  { text: "Bache en el carril derecho", severidad: "Severo" },
  { text: "Hundimiento junto a la banqueta", severidad: "Moderado" },
  { text: "Grieta leve en el asfalto", severidad: "Leve" },
] as const;

export function Showcase() {
  const [text, setText] = useState<string>(examples[0].text);
  const [level, setLevel] = useState<(typeof examples)[number]["severidad"]>(examples[0].severidad);
  const [notes, setNotes] = useState(0);

  return (
    <div>
      <label className="sr" htmlFor="ejemplo">
        Ejemplo de descripción de un bache
      </label>
      <input
        id="ejemplo"
        className="prompt"
        value={text}
        onChange={(event) => setText(event.target.value)}
        aria-describedby="ejemplo-nota"
      />
      <div className="examples">
        {examples.map((item) => (
          <button
            key={item.text}
            type="button"
            onClick={() => {
              setText(item.text);
              setLevel(item.severidad);
              setNotes(0);
            }}
          >
            {item.text}
          </button>
        ))}
      </div>
      <article className="ui report" data-ui style={{ marginTop: "1.5rem", maxWidth: "36rem" }}>
        <header>
          <strong>Nuevo reporte</strong>
          <span>Pendiente</span>
        </header>
        <div className="photo">Foto del bache</div>
        <p>{text || "Escribe qué se ve en la calle."}</p>
        <div className="chips" role="group" aria-label="Severidad">
          {(["Severo", "Moderado", "Leve"] as const).map((item) => (
            <button key={item} type="button" aria-pressed={level === item} onClick={() => setLevel(item)}>
              {item}
            </button>
          ))}
        </div>
        <p>Ubicación de ejemplo, Tijuana.</p>
        <div className="confirm">
          <span>{notes === 1 ? "1 confirmación de ejemplo" : `${notes} confirmaciones de ejemplo`}</span>
          <button className="button" type="button" onClick={() => setNotes((n) => n + 1)}>
            Confirmar ejemplo
          </button>
        </div>
      </article>
      <p id="ejemplo-nota" className="note" style={{ marginTop: "1rem" }}>
        Esto es un ejemplo en la página. No crea un reporte ni pone un punto en el mapa.
      </p>
      <p className="lead">
        La app también pide una ruta en auto y muestra hasta tres alternativas, puntuadas con los reportes que quedan cerca.
      </p>
    </div>
  );
}
