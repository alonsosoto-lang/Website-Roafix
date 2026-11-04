export type Severidad = "alta" | "media" | "baja";

export type PublicReport = {
  id: string;
  latitud: number;
  longitud: number;
  severidad: Severidad;
  estado: "pendiente" | "resuelto";
  confirmaciones: number;
};

export type PublicCounts = {
  pendientes: number;
  resueltos: number;
  confirmaciones: number;
};

export type PublicPayload = {
  live: boolean;
  reports: PublicReport[];
  counts: PublicCounts | null;
};
