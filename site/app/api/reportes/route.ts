import { NextResponse } from "next/server";
import type { PublicCounts, PublicPayload, PublicReport, Severidad } from "@/lib/types";

const severities = new Set<Severidad>(["alta", "media", "baja"]);

function asReport(row: Record<string, unknown>): PublicReport | null {
  const severidad = row.severidad;
  const estado = row.estado;
  if (
    typeof row.id !== "string" ||
    typeof row.latitud !== "number" ||
    typeof row.longitud !== "number" ||
    typeof severidad !== "string" ||
    !severities.has(severidad as Severidad) ||
    (estado !== "pendiente" && estado !== "resuelto")
  ) {
    return null;
  }
  return {
    id: row.id,
    latitud: row.latitud,
    longitud: row.longitud,
    severidad: severidad as Severidad,
    estado,
    confirmaciones: typeof row.confirmaciones === "number" ? row.confirmaciones : 0,
  };
}

async function countOf(base: string, headers: HeadersInit, filter: string) {
  const res = await fetch(`${base}?${filter}&select=id`, {
    headers: { ...headers, Prefer: "count=exact", Range: "0-0" },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const total = res.headers.get("content-range")?.split("/")[1];
  const n = Number(total);
  return Number.isFinite(n) ? n : null;
}

export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  const empty: PublicPayload = { live: false, reports: [], counts: null };
  if (!url || !key) return NextResponse.json(empty);

  const headers = { apikey: key, Authorization: `Bearer ${key}` };
  const base = `${url.replace(/\/$/, "")}/rest/v1/reportes`;

  try {
    const pendingRes = await fetch(
      `${base}?estado=eq.pendiente&select=id,latitud,longitud,severidad,estado,confirmaciones`,
      { headers, cache: "no-store" },
    );
    if (!pendingRes.ok) return NextResponse.json(empty);
    const rows = (await pendingRes.json()) as Record<string, unknown>[];
    const reports = rows.map(asReport).filter((row): row is PublicReport => row !== null);
    const pendientes = await countOf(base, headers, "estado=eq.pendiente");
    const resueltos = await countOf(base, headers, "estado=eq.resuelto");
    const counts: PublicCounts | null =
      pendientes === null || resueltos === null
        ? null
        : {
            pendientes,
            resueltos,
            confirmaciones: reports.reduce((sum, row) => sum + row.confirmaciones, 0),
          };
    return NextResponse.json({ live: true, reports, counts } satisfies PublicPayload);
  } catch {
    return NextResponse.json(empty);
  }
}
