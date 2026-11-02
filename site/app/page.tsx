import { CityMap } from "@/components/CityMap";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Showcase } from "@/components/Showcase";
import { Street } from "@/components/Street";
import { Wordmark } from "@/components/Wordmark";
import { idea } from "@/lib/idea";

const nav = [
  ["Problema", "#problema"],
  ["App", "#app"],
  ["Mapa", "#mapa"],
  ["Participar", "#participar"],
] as const;

const questions = [
  ["Qué es Roafix", "Es una plataforma cívica hecha en Tijuana. Una persona reporta un bache con foto y ubicación, y ese reporte puede verse en un mapa público."],
  ["Qué se puede reportar", "Hoy, baches. La foto se revisa para ver si parece un bache. La app no tiene otras categorías de problema vial."],
  ["Cómo se reporta", "Hace falta una cuenta. Se toma o se elige una foto, la app guarda el GPS y se escribe qué pasa. La severidad es Severo, Moderado o Leve. Sin internet, el reporte espera en el teléfono. Si ya hay uno a menos de 30 metros, se puede confirmar ese en lugar de repetirlo."],
  ["Se puede seguir el estado", "En Mis reportes aparece Pendiente o Resuelto. El mapa público muestra los pendientes. Cuando un reporte se marca resuelto, sale de ese mapa. La app no manda un aviso."],
  ["Cómo puede colaborar un municipio", "El mapa de reportes pendientes es público y se puede consultar sin cuenta. Roafix no incluye un panel municipal. No hay plazos de respuesta comprometidos."],
  ["Está limitado a Tijuana", "Hoy sí. El mapa está centrado en Tijuana, Baja California."],
  ["Cómo colaborar con el proyecto", "Todavía no hay un correo público en la app. Las tres puertas de esta página dicen cómo puede entrar la ciudadanía, un gobierno o un aliado."],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip" href="#inicio">Saltar al contenido</a>
      <header className="bar">
        <a className="brand" href="#inicio" aria-label="Roafix, inicio">
          <Wordmark />
        </a>
        <nav className="links" aria-label="Secciones">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
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
          <h1>
            <span className="line">La ciudad también</span>
            <span className="line">
              puede <span className="glyph shutter" data-ui aria-hidden="true"><svg className="lane" viewBox="0 0 80 36"><line className="dash" x1="6" y1="18" x2="74" y2="18" /></svg></span> reportar.
            </span>
          </h1>
          <div className="hero-foot">
            <p className="rise rise-2">
              Conectamos a la ciudadanía y al Ayuntamiento para identificar, priorizar y dar seguimiento a los baches en Tijuana, Baja California.
            </p>
            <div className="actions rise rise-3">
              <a className="button wide" href="#app">Conoce Roafix</a>
              <a className="textlink" href="#proceso">Descubre cómo funciona</a>
            </div>
          </div>
        </section>

        <section className="section" id="problema">
          <div className="about">
            <div className="facts rise">
              <p><strong>Tijuana, B.C.</strong><span>Ciudad donde nace el mapa.</span></p>
              <p><strong>Foto y GPS</strong><span>Así se arma un reporte.</span></p>
              <p><strong>Mapa público</strong><span>Los pendientes se ven sin cuenta.</span></p>
            </div>
            <div>
              <h2 className="rise">Lo que no se ve</h2>
              <div className="drop rise rise-2" aria-hidden="true"><Street marked={false} /></div>
              <p className="lead rise rise-3">
                Una ciudad no puede resolver lo que no alcanza a ver. Un bache cambia el trayecto, el riesgo y el día de quien pasa por ahí. Reportarlo suele perderse en un mensaje, y después es difícil saber si alguien lo miró o qué zona acumula más daños.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="app">
          <div className="grid-2">
            <div className="rise">
              <h2>De un reporte a la calle</h2>
              <p className="lead">
                De un reporte ciudadano a una solución visible. Roafix junta tres cosas: quien vive la calle, un dato con lugar y foto, y una autoridad que puede usar esa información sin ser dueña del sistema.
              </p>
              <div className="roles">
                <div>
                  <h3>Ciudadanía</h3>
                  <p>Tu ciudad también necesita tu voz. Reportar un bache es el primer paso.</p>
                </div>
                <div>
                  <h3>Información</h3>
                  <p>La queja suelta se vuelve un punto, una severidad y un número de confirmaciones.</p>
                </div>
                <div>
                  <h3>Ayuntamiento</h3>
                  <p>Puede mirar el mapa público. Roafix no le pertenece y no promete una reparación.</p>
                </div>
              </div>
            </div>
            <div className="rise rise-2">
              <Showcase />
            </div>
          </div>
        </section>

        <section className="section" id="proceso">
          <Process />
        </section>

        <section className="section gallery" id="mapa">
          <h2 className="rise">
            <span className="line">Observar</span>
            <span className="line">la ciudad</span>
          </h2>
          <div className="prints">
            <div className="print rise rise-2"><Street /></div>
            <div className="rise rise-3"><CityMap /></div>
          </div>
          <p className="lead">Entender una ciudad comienza por observarla. Aquí solo entra lo que la consulta pública puede mostrar.</p>
        </section>

        <section className="section" id="transparencia">
          <h2 className="rise">Saber qué pasó</h2>
          <div className="proof rise rise-2" style={{ marginTop: "1.5rem" }}>
            <Proof />
          </div>
          <p className="lead">
            Reportar es el comienzo. Saber qué pasó es lo importante. La app conoce dos estados, Pendiente y Resuelto, y no publica un tiempo de respuesta.
          </p>
        </section>

        <section className="section" id="participar">
          <h2 className="rise">Tres maneras de entrar</h2>
          <div className="paths" style={{ marginTop: "2rem" }}>
            <a className="path rise rise-2" href="#app">
              <strong>Ciudadanía</strong>
              <span>Tu ciudad también necesita tu voz.</span>
              <span className="textlink">Ver cómo se reporta</span>
            </a>
            <div className="portrait rise rise-2" aria-hidden="true"><Street /></div>
            <div className="rise rise-3">
              <a className="path" href="#mapa">
                <strong>Gobierno</strong>
                <span>Información que puede ayudar a mejorar la gestión vial.</span>
                <span className="textlink">Abrir el mapa</span>
              </a>
              <a className="path" href="#preguntas" style={{ marginTop: "1.6rem" }}>
                <strong>Aliados</strong>
                <span>Las mejores ciudades se construyen en conjunto.</span>
                <span className="textlink">Leer cómo colaborar</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section faq" id="preguntas">
          <h2 className="rise">Preguntas frecuentes</h2>
          <div className="questions">
            {questions.map(([q, a]) => (
              <details key={q} className="rise">
                <summary>
                  {q}
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2 5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="close" id="cierre">
          <h2>
            <span className="line">Participar</span>
            <span className="line">cambia la calle</span>
          </h2>
          <div className="close-foot">
            <p>Conoce Roafix y forma parte de una manera nueva de identificar y atender los baches.</p>
            <a className="button wide" href="#participar">Quiero participar</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-top">
          <div>
            <h2>Forma parte</h2>
            <a className="button" href="#app" style={{ marginTop: "1.2rem" }}>Conoce Roafix</a>
          </div>
          <nav aria-label="Pie">
            <a href="#problema">Problema</a>
            <a href="#app">App</a>
            <a href="#mapa">Mapa</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
        </div>
        <p className="legal">
          <span>Millennium Fellowship Class of 2026</span>
          <span>ODS 11 · Ciudades y comunidades sostenibles</span>
          <span>© 2026 Roafix</span>
        </p>
        <p className="word" aria-label="Roafix">Roafix</p>
      </footer>
    </>
  );
}
