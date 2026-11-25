export default function Proceso() {
  const pasos = [
    {
      numero: "01",
      titulo: "Diagnóstico de tu embudo actual",
      descripcion:
        "Analizamos cómo llegan hoy tus mensajes, dónde se pierden clientes y qué preguntas repite tu equipo todos los días.",
    },
    {
      numero: "02",
      titulo: "Arquitectura de pipelines y Salesbots",
      descripcion:
        "Configuramos tus etapas de venta en Kommo, conectamos tu WhatsApp oficial y programamos bots que filtran prospectos.",
    },
    {
      numero: "03",
      titulo: "Capacitación y lanzamiento en vivo",
      descripcion:
        "Entrenamos a tus asesores para gestionar chats desde un solo panel y dejamos tus métricas listas para escalar.",
    },
  ];

  return (
    <section id="proceso" className="border-t border-[#0D3B33]/10 bg-[#F3F8F6] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15795E]">
            Metodología clara
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0D3B33] sm:text-4xl">
            De chats desordenados a un sistema predecible en 3 pasos
          </h2>
        </div>

        {/* Pasos */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pasos.map((paso) => (
            <div
              key={paso.numero}
              className="relative rounded-2xl border border-[#0D3B33]/10 bg-white p-7 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D3B33] text-sm font-black text-white">
                {paso.numero}
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#0D3B33]">
                {paso.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#17231F]/80">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}