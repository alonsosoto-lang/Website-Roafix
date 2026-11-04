"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  Category,
  ComponentPrompt,
  Piece,
  Swatch,
} from "@/lib/inspiration";

type Props = {
  pieces: Piece[];
  categories: Category[];
  componentPrompts: ComponentPrompt[];
};

async function writeClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(async (text: string, key: string) => {
    try {
      await writeClipboard(text);
      setCopied(key);
    } catch {
      setCopied(`error:${key}`);
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1800);
  }, []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  return { copied, copy };
}

function Wordmark() {
  return (
    <span
      className="font-sans text-[34px] leading-none font-black tracking-[-0.04em] text-ink"
      aria-label="Roafix"
    >
      R
      <span
        aria-hidden="true"
        className="mx-[0.02em] inline-flex size-[0.6em] translate-y-[0.02em] items-center justify-center rounded-full bg-ink align-baseline"
      >
        <span className="block h-[0.32em] w-[0.08em] rounded-full bg-signal" />
      </span>
      afix
    </span>
  );
}

function SwatchButton({
  swatch,
  copied,
  onCopy,
}: {
  swatch: Swatch;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className="group flex flex-col gap-[8px] text-left"
      title={`Copiar ${swatch.hex}`}
    >
      <span
        className="block h-14 w-full rounded-[3px] ring-1 ring-ink/10 ring-inset transition-transform duration-150 group-hover:-translate-y-0.5"
        style={{ backgroundColor: swatch.hex }}
      />
      <span className="text-[15px] leading-tight font-semibold tabular-nums">
        {copied ? "Copiado" : swatch.hex}
      </span>
      <span className="text-[13px] leading-snug text-ink-soft">
        {swatch.role}
      </span>
    </button>
  );
}

function CopyButton({
  label,
  state,
  onClick,
  tone,
}: {
  label: string;
  state: "idle" | "copied" | "error";
  onClick: () => void;
  tone: "solid" | "plain";
}) {
  const base =
    "inline-flex min-h-12 items-center justify-between gap-s12 rounded-[10px] px-s20 text-[16px] font-semibold transition-colors duration-150";
  const toneClass =
    tone === "solid"
      ? "bg-asphalt text-amber hover:bg-ink"
      : "bg-surface-deep text-ink hover:bg-signal";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${toneClass}`}
    >
      <span>
        {state === "copied"
          ? "Copiado"
          : state === "error"
            ? "No se pudo copiar"
            : label}
      </span>
      <span
        aria-hidden="true"
        className={`grid size-7 place-items-center rounded-full text-[15px] leading-none ${
          tone === "solid" ? "bg-amber text-ink" : "bg-ink text-paper"
        }`}
      >
        {state === "copied" ? "✓" : "↗"}
      </span>
    </button>
  );
}

export default function InspoGallery({
  pieces,
  categories,
  componentPrompts,
}: Props) {
  const [activeId, setActiveId] = useState(pieces[0]?.id);
  const { copied, copy } = useCopy();

  const activeIndex = Math.max(
    0,
    pieces.findIndex((p) => p.id === activeId),
  );
  const active = pieces[activeIndex];

  const stateFor = (key: string): "idle" | "copied" | "error" =>
    copied === key ? "copied" : copied === `error:${key}` ? "error" : "idle";

  const step = useCallback(
    (delta: number) => {
      const next = (activeIndex + delta + pieces.length) % pieces.length;
      setActiveId(pieces[next].id);
    },
    [activeIndex, pieces],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  if (!active) return null;

  const isBrand = active.category === "Marca";

  return (
    <div className="mx-auto flex min-h-dvh max-w-[1600px] flex-col gap-s36 px-s20 py-s20 md:px-s36 md:py-s36 xl:px-s64">
      <header className="flex flex-wrap items-end justify-between gap-x-s36 gap-y-s12">
        <Wordmark />
        <p className="max-w-[52ch] text-[16px] leading-snug text-ink-soft">
          Biblioteca interna. Once referencias que fijan cómo se ve el sitio
          de difusión: paleta medida, intención y prompts listos para copiar.
          Usa las flechas del teclado para recorrerlas.
        </p>
      </header>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-s36 lg:grid-cols-[168px_minmax(0,1fr)] xl:grid-cols-[168px_minmax(0,1fr)_400px]">
        <nav aria-label="Categorías" className="min-w-0 lg:pt-s12">
          <ul className="strip -mx-s20 flex gap-[6px] overflow-x-auto px-s20 lg:mx-0 lg:flex-col lg:gap-[4px] lg:overflow-visible lg:px-0">
            {categories.map((category) => {
              const members = pieces.filter((p) => p.category === category);
              const current = category === active.category;
              return (
                <li key={category} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveId(members[0]?.id)}
                    aria-current={current ? "true" : undefined}
                    className={`flex w-full items-center gap-s12 rounded-[6px] py-[10px] pr-s12 pl-s12 text-left text-[17px] transition-colors duration-150 ${
                      current
                        ? "bg-signal font-semibold text-ink"
                        : "text-ink hover:bg-surface"
                    }`}
                  >
                    <span className="flex-1">{category}</span>
                    <span className="text-[14px] text-ink-soft tabular-nums">
                      {members.length}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <section
          aria-label="Referencia seleccionada"
          className="flex min-w-0 flex-col gap-s12"
        >
          <div className="flex min-h-[320px] items-center justify-center rounded-[4px] bg-surface p-s20 md:p-s36 xl:h-[min(78vh,880px)]">
            <Image
              key={active.id}
              src={active.file}
              width={active.width}
              height={active.height}
              alt={active.alt}
              loading="eager"
              sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 75vw, 100vw"
              className="h-auto max-h-[64vh] w-auto max-w-full object-contain xl:max-h-full"
            />
          </div>
          {active.referenceOnly ? (
            <p className="rounded-[4px] bg-ink px-s20 py-s12 text-[15px] leading-snug text-paper">
              Solo referencia: trae marca de agua de un banco de imágenes. Se
              rehace con el prompt de asset y no se publica.
            </p>
          ) : null}
        </section>

        <article
          aria-live="polite"
          className="flex min-w-0 flex-col gap-s36 lg:col-start-2 xl:col-start-auto"
        >
          <div className="flex flex-col gap-s12">
            <p className="text-[15px] text-ink-soft">
              {active.category} · {active.style}
            </p>
            <h1 className="font-display text-[44px] leading-[0.98] font-extrabold tracking-[-0.02em] text-balance md:text-[56px]">
              {active.title}
            </h1>
          </div>

          <p className="text-[18px] leading-[1.55] text-pretty">
            {active.brief}
          </p>

          <div className="grid grid-cols-3 gap-x-s12 gap-y-s20 sm:grid-cols-4 xl:grid-cols-3">
            {active.palette.map((swatch) => (
              <SwatchButton
                key={swatch.hex + swatch.role}
                swatch={swatch}
                copied={copied === `${active.id}:${swatch.hex}`}
                onCopy={() => copy(swatch.hex, `${active.id}:${swatch.hex}`)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[15px] font-semibold">Tipografía</h2>
            <p className="text-[16px] leading-[1.5] text-ink-soft">
              {active.typography}
            </p>
          </div>

          <div className="flex flex-col gap-s12">
            <h2 className="text-[15px] font-semibold">Componentes que salen de aquí</h2>
            <ul className="flex flex-wrap gap-[8px]">
              {active.components.map((name) => (
                <li
                  key={name}
                  className="rounded-full border-[1.5px] border-amber px-[14px] py-[5px] text-[14px]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-s12">
            <CopyButton
              tone="solid"
              label="Copiar prompt de diseño"
              state={stateFor(`${active.id}:design`)}
              onClick={() => copy(active.designPrompt, `${active.id}:design`)}
            />
            <CopyButton
              tone="plain"
              label="Copiar prompt de asset"
              state={stateFor(`${active.id}:asset`)}
              onClick={() => copy(active.assetPrompt, `${active.id}:asset`)}
            />
            <details className="group rounded-[6px] bg-surface px-s20 py-s12">
              <summary className="cursor-pointer text-[15px] font-semibold marker:text-amber">
                Leer los prompts
              </summary>
              <div className="flex flex-col gap-s20 pt-s12 pb-[6px] text-[15px] leading-[1.55]">
                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-semibold">Diseño (para el chat de código)</h3>
                  <p className="text-ink-soft">{active.designPrompt}</p>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-semibold">Asset (Higgsfield)</h3>
                  <p lang="en" className="text-ink-soft">
                    {active.assetPrompt}
                  </p>
                </div>
              </div>
            </details>
          </div>
        </article>
      </div>

      <nav aria-label="Todas las referencias">
        <ol className="strip -mx-s20 flex gap-s12 overflow-x-auto px-s20 pb-s12 md:-mx-s36 md:px-s36 xl:mx-0 xl:px-0">
          {pieces.map((piece) => {
            const current = piece.id === active.id;
            return (
              <li key={piece.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveId(piece.id)}
                  aria-current={current ? "true" : undefined}
                  aria-label={piece.title}
                  className="group flex flex-col gap-[8px]"
                >
                  <span
                    className={`block overflow-hidden rounded-[3px] transition-opacity duration-150 ${
                      current ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={piece.file}
                      width={piece.width}
                      height={piece.height}
                      alt=""
                      sizes="160px"
                      className="h-28 w-auto object-cover"
                    />
                  </span>
                  <span
                    className={`block h-[6px] rounded-full transition-colors duration-150 ${
                      current ? "bg-signal" : "bg-transparent"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {isBrand ? (
        <section
          aria-labelledby="componentes"
          className="flex flex-col gap-s36 rounded-[4px] bg-asphalt px-s20 py-s36 text-paper md:px-s36 xl:px-s64 xl:py-s64"
        >
          <div className="flex flex-col gap-s12">
            <h2
              id="componentes"
              className="font-display text-[40px] leading-none font-extrabold tracking-[-0.02em] md:text-[52px]"
            >
              Componentes del sistema
            </h2>
            <p className="max-w-[60ch] text-[17px] leading-[1.55] text-paper/75">
              Prompts para 21st.dev o para adaptar shadcn/ui. Cada uno ya trae
              los hex y las medidas de design-system.md, así que el resultado
              sale sin el radio ni la sombra por defecto.
            </p>
          </div>
          <ul className="grid gap-x-s36 gap-y-s36 md:grid-cols-2">
            {componentPrompts.map((item) => {
              const key = `component:${item.name}`;
              const state = stateFor(key);
              return (
                <li key={item.name} className="flex flex-col gap-s12">
                  <div className="flex items-baseline justify-between gap-s12">
                    <h3 className="text-[20px] font-semibold text-amber">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-[14px] whitespace-nowrap text-paper/60">
                      de {item.source}
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.55] text-paper/80">
                    {item.prompt}
                  </p>
                  <button
                    type="button"
                    onClick={() => copy(item.prompt, key)}
                    className="self-start rounded-[8px] bg-paper px-s20 py-[10px] text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-signal"
                  >
                    {state === "copied"
                      ? "Copiado"
                      : state === "error"
                        ? "No se pudo copiar"
                        : "Copiar prompt"}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
