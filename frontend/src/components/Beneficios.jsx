export default function Beneficios() {
  const items = [
    {
      titulo: "Atención inmediata 24/7",
      descripcion:
        "Tu Salesbot saluda, responde dudas frecuentes y captura datos clave en segundos, incluso fuera de horario laboral.",
      etiqueta: "Cero fugas de leads",
    },
    {
      titulo: "Todos tus canales en un lugar",
      descripcion:
        "Conecta WhatsApp API, Instagram Direct, Facebook Messenger y formularios web en una sola bandeja compartida.",
      etiqueta: "Omnicanalidad real",
    },
    {
      titulo: "Control total de tus asesores",
      descripcion:
        "Asigna conversaciones automáticamente, mide tiempos de respuesta y visualiza en qué etapa está cada venta.",
      etiqueta: "Métricas claras",
    },
  ];

  return (
    <section id="beneficios" className="border-t border-[#0D3B33]/10 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15795E]">
            Beneficios clave
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0D3B33] sm:text-4xl">
            Ordena tu proceso comercial sin contratar más personal
          </h2>
          <p className="mt-4 text-base text-[#17231F]/80">
            Diseñamos flujos conversacionales a medida para que tu equipo se enfoque solo en cerrar ventas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-[#0D3B33]/10 bg-[#F3F8F6] p-7 transition hover:-translate-y-1 hover:border-[#15795E]/40 hover:shadow-lg hover:shadow-[#0D3B33]/5"
            >
              <div>
                <span className="inline-block rounded-md bg-[#15795E]/15 px-2.5 py-1 text-xs font-bold text-[#15795E]">
                  {item.etiqueta}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#0D3B33]">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#17231F]/80">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}