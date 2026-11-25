import { useEffect, useRef, useState } from "react";

const HEADLINES = [
  {
    prefix: "¿Te escriben pidiendo info por WhatsApp y",
    highlight: "se enfrían en el chat?",
  },
  {
    prefix: "De chats sueltos y notas dispersas a",
    highlight: "clientes ordenados y listos para cerrar",
  },
  {
    prefix: "WhatsApp atrae, tu embudo conversa y Kommo",
    highlight: "no deja escapar ni una consulta",
  },
];

const CLIENT_SCENARIOS = [
  {
    id: "enfrian",
    label: "Piden info y se enfrían",
    tag: "Seguimiento sin perder el trato",
    title: "Si hoy les mandas precio o info y luego dejan de contestar...",
    body: "Te ayudamos a organizar el seguimiento en Kommo para que ningún interesado quede olvidado y cada consulta tenga un próximo paso claro.",
    ctaText: "Ver cómo ordenar mi seguimiento",
    waMessage:
      "Hola Diego, me escriben pidiendo info por WhatsApp y se enfrían. Me gustaría ver cómo ordenarlo con Kommo.",
  },
  {
    id: "tarde",
    label: "Respondo tarde o a ratos",
    tag: "Atención ágil en momentos clave",
    title: "Cuando estás atendiendo o en movimiento, cada minuto cuenta...",
    body: "Configuramos respuestas y flujos automáticos en WhatsApp conectados a Kommo para recibir, perfilar y responder al instante sin sonar frío.",
    ctaText: "Conversar sobre respuestas ágiles",
    waMessage:
      "Hola Diego, a veces respondo tarde por WhatsApp y pierdo consultas. ¿Cómo podemos automatizarlo bien?",
  },
  {
    id: "desorden",
    label: "Muchos chats, cero orden",
    tag: "Todo en un solo embudo",
    title: "Si ya no sabes quién pidió cotización, quién ya pagó o a quién toca escribir...",
    body: "Armamos un embudo claro en Kommo CRM adaptado a cómo vende tu negocio hoy, sin complicarte con procesos gigantes.",
    ctaText: "Ordenar mis chats en Kommo",
    waMessage:
      "Hola Diego, manejo muchos chats por WhatsApp y necesito ordenarlos en Kommo CRM.",
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const spotRef = useRef(null);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    CLIENT_SCENARIOS[0].id
  );

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 4200);

    return () => clearInterval(cycleInterval);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current || !spotRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  const activeScenario =
    CLIENT_SCENARIOS.find((item) => item.id === selectedScenarioId) ||
    CLIENT_SCENARIOS[0];

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    activeScenario.waMessage
  )}`;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-14 sm:py-20"
    >
      {/* Textura de puntos + halo esmeralda y sutil toque ámbar */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#0D3B33_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07]" />
      <div
        ref={spotRef}
        style={{ transform: "translate3d(70%, 20%, 0) translate(-50%, -50%)" }}
        className="pointer-events-none absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-[#1F8A68]/20 blur-3xl will-change-transform"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Parte superior a ancho completo: titular animado sin cortes ni saltos */}
        <div className="max-w-5xl">
          <h1 className="grid text-4xl font-extrabold tracking-tight text-[#0D3B33] sm:text-5xl lg:text-[4rem] lg:leading-[1.08]">
            {HEADLINES.map((item, idx) => {
              const isActive = idx === headlineIndex;
              return (
                <span
                  key={idx}
                  aria-hidden={!isActive}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className={`col-start-1 row-start-1 transition-all duration-700 will-change-[opacity,transform] ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  {item.prefix}{" "}
                  <span className="bg-gradient-to-r from-[#15795E] via-[#1F8A68] to-[#D97706] bg-clip-text text-transparent">
                    {item.highlight}
                  </span>
                </span>
              );
            })}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#17231F]/80">
            Si tu negocio capta y vende por WhatsApp, te ayudamos a ordenar cada
            consulta en Kommo CRM y automatizar el seguimiento sin perder la
            cercanía con tus clientes.
          </p>

          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#15795E] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#15795E]/25 transition duration-200 hover:-translate-y-0.5 hover:bg-[#1F8A68]"
            >
              <span>Escribir por WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-xl border border-[#0D3B33]/15 bg-white px-7 py-3.5 text-base font-semibold text-[#0D3B33] shadow-sm transition duration-200 hover:border-[#15795E] hover:bg-[#15795E]/5"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* Parte inferior: bloque interactivo para conectar con el cliente desde que entra */}
        <div className="mt-12 rounded-2xl border border-[#0D3B33]/12 bg-white/90 p-6 shadow-xl shadow-[#0D3B33]/5 backdrop-blur-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-[#0D3B33]/10 pb-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D97706]">
                Cuéntanos qué pasa hoy
              </p>
              <h2 className="mt-1 text-xl font-extrabold text-[#0D3B33] sm:text-2xl">
                ¿Qué es lo que más te frena hoy en WhatsApp?
              </h2>
            </div>

            {/* Selector rápido de situación */}
            <div className="flex flex-wrap gap-2">
              {CLIENT_SCENARIOS.map((item) => {
                const active = item.id === selectedScenarioId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedScenarioId(item.id)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition sm:text-sm ${
                      active
                        ? "bg-[#0D3B33] text-white shadow-sm"
                        : "border border-[#0D3B33]/15 bg-[#F3F8F6] text-[#0D3B33] hover:border-[#15795E]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Respuesta enfocada en el cliente */}
          <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-bold text-[#92400E]">
                {activeScenario.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#0D3B33] sm:text-xl">
                {activeScenario.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#17231F]/80 sm:text-base">
                {activeScenario.body}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D97706] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#D97706]/20 transition hover:-translate-y-0.5 hover:bg-[#B45309] sm:w-auto"
              >
                <span>{activeScenario.ctaText}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}