import { CityMap } from "@/components/CityMap";
import { Logo, RoadO } from "@/components/Logo";
import { Process } from "@/components/Process";
import { Showcase } from "@/components/Showcase";
import { idea } from "@/lib/idea";

const nav = [
  ["Problema", "#problema"],
  ["App", "#app"],
  ["Mapa", "#mapa"],
  ["Participar", "#participar"],
] as const;

const tabs = [
  ["Mapa", "Los pendientes, en el mapa", "Cada reporte con su severidad y sus confirmaciones. Se consulta sin cuenta."],
  ["Rutas", "Un trayecto con menos baches", "Hasta tres alternativas en auto, puntuadas con los reportes que quedan cerca."],
  ["Reportar", "Foto, lugar y severidad", "Pide sesión. La app guarda el GPS y la severidad: Severo, Moderado o Leve."],
  ["Mis reportes", "El estado de lo que enviaste", "Cada reporte aparece como Pendiente o Resuelto."],
] as const;

const roles = [
  ["Ciudadanía", "Quien vive la calle ve el bache y lo reporta."],
  ["Información", "La queja suelta se vuelve un punto con foto, severidad y confirmaciones."],
  ["Ayuntamiento", "Puede consultar el mapa público. Roafix no le pertenece."],
] as const;

const questions = [
  ["Qué es Roafix", "Es una plataforma cívica hecha en Tijuana. Una persona reporta un bache con foto y ubicación, y ese reporte puede verse en un mapa público."],
  ["Qué se puede reportar", "Hoy, baches. La foto se revisa para ver si parece un bache. La app no tiene otras categorías de problema vial."],
  ["Cómo se reporta", "Hace falta una cuenta. Se toma o se elige una foto, la app guarda el GPS y se escribe qué pasa. La severidad es Severo, Moderado o Leve. Sin internet, el reporte espera en el teléfono. Si ya hay uno a menos de 30 metros, se puede confirmar ese en lugar de repetirlo."],
  ["Se puede seguir el estado", "En Mis reportes aparece Pendiente o Resuelto. El mapa público muestra los pendientes. Cuando un reporte se marca resuelto, sale de ese mapa. La app no manda un aviso."],
  ["Cómo puede colaborar un municipio", "El mapa de reportes pendientes es público y se puede consultar sin cuenta. Roafix no incluye un panel municipal. No hay plazos de respuesta comprometidos."],
  ["Está limitado a Tijuana", "Hoy sí. El mapa está centrado en Tijuana, Baja California."],
  ["Cómo colaborar con el proyecto", "Todavía no hay un correo público. Las tres maneras de entrar de esta página dicen cómo puede sumarse la ciudadanía, un gobierno o un aliado."],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip" href="#problema">Saltar al contenido</a>
      <header className="bar">
        <a className="brand" href="#inicio" aria-label="Roafix, inicio">
          <Logo className="brand-logo" label={null} />
        </a>
        <nav className="links" aria-label="Secciones">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="button dark small bar-cta" href="#mapa">
          <RoadO className="cta-o" tone="cream" />
          Ver el mapa
        </a>
        <details className="menu">
          <summary>Menú</summary>
          <nav aria-label="Secciones">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="inicio" data-idea={idea}>
          <div className="hero-word rise" data-ui>
            <Logo tone="hero" label={null} className="giant" />
          </div>
          <div className="hero-row">
            <h1 className="rise rise-2">
              <span className="line">La ciudad también</span>
              <span className="line">puede reportar<span className="dot">.</span></span>
            </h1>
            <div className="hero-side rise rise-3">
              <p>
                Conectamos a la ciudadanía y al Ayuntamiento para identificar, priorizar y dar seguimiento a los baches en Tijuana, Baja California.
              </p>
              <div className="actions">
                <a className="button dark" href="#app">Conoce Roafix</a>
                <a className="textlink" href="#proceso">Descubre cómo funciona</a>
              </div>
            </div>
          </div>
          <ul className="facts rise rise-3">
            <li><strong>Tijuana, B.C.</strong><span>32.5149° N, 117.0382° O</span></li>
            <li><strong>Foto y GPS</strong><span>Así se arma un reporte</span></li>
            <li><strong>Mapa público</strong><span>Los pendientes se ven sin cuenta</span></li>
          </ul>
        </section>

        <section className="band ink" id="problema">
          <div className="sun rise">
            <h2 className="sr">El problema</h2>
            <p className="statement">
              Una ciudad no puede <b>resolver</b> lo que no alcanza a <b>ver</b>. Un <b>bache</b> cambia el trayecto, el riesgo y el día de quien pasa por ahí.
            </p>
          </div>
          <p className="after rise rise-2">
            Reportarlo suele perderse en un mensaje, y después es difícil saber si alguien lo miró o qué zona acumula más daños.
          </p>

          <div className="route" id="enfoque">
            <h2 className="rise">
              <span className="line">Del reporte</span>
              <span className="line">a la calle<span className="dot">.</span></span>
            </h2>
            <p className="lead rise rise-2">
              De un reporte ciudadano a una solución visible. Una autoridad puede usar esa información sin ser dueña del sistema.
            </p>
            <ol className="stops">
              {roles.map(([title, body], i) => (
                <li key={title} className={`rise rise-${i + 1}`}>
                  <RoadO className="stop-o" tone="cream" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band cream" id="app">
          <div className="split">
            <div className="split-copy rise">
              <h2>
                <span className="line">La app,</span>
                <span className="line">por dentro<span className="dot">.</span></span>
              </h2>
              <p className="lead">
                Roafix es una app para reportar baches en Tijuana. Tiene cuatro pestañas, y cada una hace una cosa.
              </p>
              <a className="button dark" href="#mapa">Ver el mapa público</a>
            </div>
            <div className="split-list rise rise-2">
              <Showcase />
              <ul className="tabs">
                {tabs.map(([tag, title, body]) => (
                  <li key={tag}>
                    <span className="tab-tag">{tag}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="band yellow" id="proceso">
          <h2 className="rise">Así funciona<span className="dot ink-dot">.</span></h2>
          <p className="lead rise rise-2">Participar nunca debería ser complicado.</p>
          <div className="rise rise-3">
            <Process />
          </div>
        </section>

        <section className="band cream" id="mapa">
          <div className="map-head">
            <h2 className="rise">
              <span className="line">Observar</span>
              <span className="line">la ciudad<span className="dot">.</span></span>
            </h2>
            <p className="lead rise rise-2">
              Entender una ciudad comienza por observarla. Aquí solo entra lo que la consulta pública puede mostrar.
            </p>
          </div>
          <div className="rise rise-3">
            <CityMap />
          </div>
        </section>

        <section className="band ink" id="transparencia">
          <div className="split">
            <div className="split-copy rise">
              <h2>
                <span className="line">Saber</span>
                <span className="line">qué pasó<span className="dot">.</span></span>
              </h2>
              <p className="lead">
                Reportar es el comienzo. Saber qué pasó es lo importante. La app conoce dos estados y no publica un tiempo de respuesta.
              </p>
            </div>
            <dl className="states rise rise-2">
              <div>
                <dt className="state-pending">Pendiente</dt>
                <dd>Se ve en el mapa público, con su severidad y sus confirmaciones.</dd>
              </div>
              <div>
                <dt>Resuelto</dt>
                <dd>Cuando se atiende, se marca así. Sale del mapa público y no se manda un aviso a quien lo reportó.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="band yellow mission" id="mision">
          <h2 className="rise">Ciudades sostenibles<span className="dot ink-dot">.</span></h2>
          <p className="lead rise rise-2">
            Roafix participa en el Millennium Fellowship Class of 2026 y trabaja alineado con el Objetivo de Desarrollo Sostenible 11, Ciudades y comunidades sostenibles.
          </p>
        </section>

        <section className="band cream" id="participar">
          <h2 className="rise">
            <span className="line">Tres maneras</span>
            <span className="line">de entrar<span className="dot">.</span></span>
          </h2>
          <div className="paths">
            <div className="path rise">
              <h3>Ciudadanía</h3>
              <p>Tu ciudad también necesita tu voz. Reportar un bache es el primer paso.</p>
              <a className="button dark" href="#proceso">Ver cómo se reporta</a>
            </div>
            <div className="path rise rise-2">
              <h3>Gobierno</h3>
              <p>Información que puede ayudar a mejorar la gestión vial, en un mapa público.</p>
              <a className="button dark" href="#mapa">Abrir el mapa</a>
            </div>
            <div className="path rise rise-3">
              <h3>Aliados</h3>
              <p>Las mejores ciudades se construyen en conjunto.</p>
              <a className="button dark" href="#preguntas">Leer cómo colaborar</a>
            </div>
          </div>
        </section>

        <section className="band ink faq" id="preguntas">
          <div className="faq-head rise">
            <h2>
              <span className="line">Preguntas,</span>
              <span className="line">respondidas<span className="dot">.</span></span>
            </h2>
            <p>Lo que suele preguntarse sobre Roafix, el mapa y cómo sumarse.</p>
          </div>
          <div className="questions">
            {questions.map(([q, a]) => (
              <details key={q} className="rise">
                <summary>
                  <span>{q}</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="band yellow close" id="cierre">
          <h2 className="rise">
            <span className="line">Participar</span>
            <span className="line">cambia la calle<span className="dot ink-dot">.</span></span>
          </h2>
          <div className="close-foot rise rise-2">
            <p>Una mejor ciudad comienza cuando decidimos participar. Conoce Roafix y forma parte de una manera nueva de identificar y atender los baches.</p>
            <a className="button dark" href="#participar">Quiero participar</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo tone="cream" className="foot-logo" />
            <p>Una plataforma cívica de Tijuana para reportar baches y verlos en un mapa público.</p>
          </div>
          <nav aria-label="Pie">
            <a href="#inicio">Inicio</a>
            <a href="#problema">Problema</a>
            <a href="#app">App</a>
            <a href="#mapa">Mapa</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <p className="legal">
            <span>Millennium Fellowship Class of 2026</span>
            <span>ODS 11 · Ciudades y comunidades sostenibles</span>
            <span>© 2026 Roafix</span>
          </p>
        </div>
        <div className="farewell" aria-hidden="true">
          <span className="farewell-sun" />
          <svg className="farewell-word" viewBox="0 0 1000 250">
            <text x="500" y="228" textAnchor="middle">
              Reporta<tspan className="farewell-dot">.</tspan>
            </text>
          </svg>
        </div>
      </footer>
    </>
  );
}
