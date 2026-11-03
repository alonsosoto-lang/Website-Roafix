"use client";

import { useState } from "react";

const examples = [
  { text: "Bache en el carril derecho", severidad: "Severo" },
  { text: "Hundimiento junto a la banqueta", severidad: "Moderado" },
  { text: "Grieta leve en el asfalto", severidad: "Leve" },
] as const;

type Level = (typeof examples)[number]["severidad"];

export function Showcase() {
  const [text, setText] = useState<string>(examples[0].text);
  const [level, setLevel] = useState<Level>(examples[0].severidad);
  const [notes, setNotes] = useState(0);

  return (
    <article className="card" data-ui>
      <header className="card-top">
        <span>Reporte de ejemplo</span>
        <span>Tijuana, B.C.</span>
      </header>
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
      <div className="chips" role="group" aria-label="Severidad">
        {(["Severo", "Moderado", "Leve"] as const).map((item) => (
          <button key={item} type="button" aria-pressed={level === item} onClick={() => setLevel(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="confirm">
        <span>{notes === 1 ? "1 confirmación de ejemplo" : `${notes} confirmaciones de ejemplo`}</span>
        <button className="button dark" type="button" onClick={() => setNotes((n) => n + 1)}>
          Confirmar ejemplo
        </button>
      </div>
      <p id="ejemplo-nota" className="note">
        Es un ejemplo en la página. No crea un reporte ni pone un punto en el mapa.
      </p>
    </article>
  );
}
