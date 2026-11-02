"use client";

import { useEffect, useRef, useState } from "react";
import { Map as MapLibreMap, Marker, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { PublicPayload } from "@/lib/types";

const center: [number, number] = [-117.0382, 32.5149];

export function CityMap() {
  const holder = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<PublicPayload | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let map: MapLibreMap | null = null;
    let gone = false;

    setWorkerUrl("/maplibre-gl-worker.js");
    (async () => {
      let payload: PublicPayload = { live: false, reports: [], counts: null };
      try {
        const res = await fetch("/api/reportes");
        payload = (await res.json()) as PublicPayload;
      } catch {
        payload = { live: false, reports: [], counts: null };
      }
      if (gone || !holder.current) return;
      setData(payload);
      const next = new MapLibreMap({
        container: holder.current,
        style: "https://tiles.openfreemap.org/styles/liberty",
        center,
        zoom: 11.2,
      });
      map = next;
      next.on("error", (event) => {
        const message = event.error instanceof Error ? event.error.message : "";
        if (!next.isStyleLoaded() && /style|fetch|ajax/i.test(message)) setFailed(true);
      });
      if (payload.live) {
        for (const report of payload.reports) {
          const el = document.createElement("button");
          el.type = "button";
          el.className = `pin pin-${report.severidad}`;
          const label =
            report.severidad === "alta" ? "Severo" : report.severidad === "media" ? "Moderado" : "Leve";
          el.setAttribute("aria-label", `${label}, ${report.confirmaciones} confirmaciones, pendiente`);
          new Marker({ element: el }).setLngLat([report.longitud, report.latitud]).addTo(next);
        }
      }
    })();

    return () => {
      gone = true;
      map?.remove();
    };
  }, []);

  const banner = !data
    ? "Cargando el mapa de Tijuana."
    : failed
      ? "El mapa base no cargó. No se muestran marcadores inventados."
      : !data.live
        ? "Sin datos en vivo. Este mapa no inventa marcadores."
        : data.reports.length === 0
          ? "No hay reportes pendientes en el mapa público."
          : `${data.reports.length} reportes pendientes, sin nombre ni fotografía.`;

  const impact = !data?.live || !data.counts
    ? "Cuando la consulta pública responda, aquí se podrán leer los pendientes, los resueltos y las confirmaciones. Hasta entonces no hay cifras."
    : `Hoy el mapa público tiene ${data.counts.pendientes} reportes pendientes y ${data.counts.resueltos} marcados resueltos. Las confirmaciones de los pendientes suman ${data.counts.confirmaciones}.`;

  return (
    <>
      <div className="city ui-map" data-ui>
        <div ref={holder} className="map" />
      </div>
      <p className="lead">{banner}</p>
      <p className="legend" aria-hidden="true">
        <span><i className="alta" /> Alta severidad</span>
        <span><i className="media" /> Media severidad</span>
        <span><i className="baja" /> Baja severidad</span>
      </p>
      <p id="impacto" className="lead">{impact}</p>
    </>
  );
}
