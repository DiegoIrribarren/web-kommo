import { useEffect, useState } from "react";

export default function IntroOverlay({ onFinish }) {
  const [phase, setPhase] = useState("init"); // init -> show -> exit -> done

  useEffect(() => {
    // Bloquea el scroll mientras corre la intro
    document.body.style.overflow = "hidden";

    const enterRaf = requestAnimationFrame(() => {
      setPhase("show");
    });

    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, 2200);

    const doneTimer = setTimeout(() => {
      document.body.style.overflow = "";
      setPhase("done");
      if (onFinish) onFinish();
    }, 3100);

    return () => {
      document.body.style.overflow = "";
      cancelAnimationFrame(enterRaf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  if (phase === "done") return null;

  const isVisible = phase === "show";
  const isExiting = phase === "exit";

  return (
    <div
      style={{ transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)" }}
      className={`fixed inset-0 z-[9999] flex h-[100dvh] w-screen flex-col justify-between overflow-hidden bg-[#061A16] p-6 text-[#F3F8F6] transition-transform duration-900 sm:p-12 ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Fondo atmosférico: grilla + luces esmeralda y ámbar */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1F8A6814_1px,transparent_1px),linear-gradient(to_bottom,#1F8A6814_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#15795E]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-[#F59E0B]/15 blur-[120px]" />

      {/* Barra superior estilo estudio */}
      <div
        className={`relative z-10 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#F3F8F6]/60 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <span className="flex items-center gap-2.5 font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
          WhatsApp + Kommo CRM
        </span>
        <span className="hidden sm:inline">Automatización de Ventas</span>
      </div>

      {/* Centro monumental: Tipografía gigante revelada por máscara */}
      <div className="relative z-10 my-auto max-w-5xl">
        <div className="overflow-hidden py-1">
          <p
            style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            className={`text-4xl font-extrabold leading-[1.02] tracking-tight text-white transition-transform duration-700 sm:text-6xl lg:text-[5.2rem] ${
              isVisible ? "translate-y-0" : "translate-y-[115%]"
            }`}
          >
            Menos chats perdidos.
          </p>
        </div>

        <div className="overflow-hidden py-1">
          <p
            style={{
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: "140ms",
            }}
            className={`text-4xl font-extrabold leading-[1.02] tracking-tight transition-transform duration-700 sm:text-6xl lg:text-[5.2rem] ${
              isVisible ? "translate-y-0" : "translate-y-[115%]"
            }`}
          >
            <span className="bg-gradient-to-r from-[#34D399] via-[#6EE7B7] to-[#FBBF24] bg-clip-text text-transparent">
              Más ventas cerradas.
            </span>
          </p>
        </div>

        <div className="mt-6 overflow-hidden">
          <p
            style={{
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: "280ms",
            }}
            className={`max-w-lg text-sm font-medium text-[#F3F8F6]/70 transition-all duration-700 sm:text-base ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Ordenamos tus consultas de WhatsApp en Kommo CRM, automatizamos el
            seguimiento y convertimos cada “¿me das info?” en oportunidad real.
          </p>
        </div>
      </div>

      {/* Pie de intro */}
      <div className="relative z-10 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#F3F8F6]/50">
          <span className="inline-block h-[1px] w-10 bg-[#F59E0B]" />
          <span>Iniciando experiencia</span>
        </div>

        <button
          type="button"
          onClick={() => {
            document.body.style.overflow = "";
            setPhase("exit");
          }}
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm transition hover:border-[#F59E0B]/60 hover:text-white"
        >
          <span>Saltar</span>
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>
    </div>
  );
}