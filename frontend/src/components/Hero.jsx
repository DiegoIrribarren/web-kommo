export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Textura sutil de puntos y halo de luz esmeralda */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#0D3B33_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-[#1F8A68]/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Columna izquierda (7 columnas): Propuesta de valor */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15795E]/30 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#0D3B33] shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1F8A68] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#15795E]" />
              </span>
              Especialistas en Kommo CRM &amp; WhatsApp API
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0D3B33] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Convierte tus chats de WhatsApp en un{" "}
              <span className="bg-gradient-to-r from-[#15795E] to-[#1F8A68] bg-clip-text text-transparent">
                embudo de ventas automático
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#17231F]/80">
              Deja de perder prospectos por responder tarde. Centralizamos WhatsApp, Instagram y tus anuncios en Kommo con Salesbots que califican y agendan clientes 24/7.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#15795E] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#15795E]/25 transition hover:-translate-y-0.5 hover:bg-[#1F8A68]"
              >
                <span>Agendar Demo Personalizada</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center rounded-xl border border-[#0D3B33]/15 bg-white px-7 py-4 text-base font-semibold text-[#0D3B33] shadow-sm transition hover:border-[#15795E] hover:bg-[#15795E]/5"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Métricas rápidas */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#0D3B33]/10 pt-6 sm:max-w-lg">
              <div>
                <p className="text-2xl font-extrabold text-[#0D3B33]">&lt; 10s</p>
                <p className="text-xs font-medium text-[#17231F]/70">Primera respuesta</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#15795E]">+42%</p>
                <p className="text-xs font-medium text-[#17231F]/70">Leads calificados</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#0D3B33]">24/7</p>
                <p className="text-xs font-medium text-[#17231F]/70">Atención sin pausas</p>
              </div>
            </div>
          </div>

          {/* Columna derecha (5 columnas): Mockup realista de Kommo + WhatsApp */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#0D3B33]/15 bg-white shadow-2xl shadow-[#0D3B33]/10">
              
              {/* Barra superior de ventana CRM */}
              <div className="flex items-center justify-between bg-[#0D3B33] px-5 py-3.5 text-white">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F8A68] text-xs font-bold">
                    CM
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none">Carlos Mendoza</p>
                    <p className="mt-1 text-[11px] text-[#F3F8F6]/70">WhatsApp • Anuncio Meta</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#1F8A68]/30 px-2.5 py-1 text-[11px] font-semibold text-[#F3F8F6]">
                  ● Bot Activo
                </span>
              </div>

              {/* Conversación simulada */}
              <div className="space-y-3.5 bg-[#F3F8F6]/70 p-5 text-sm">
                {/* Mensaje cliente */}
                <div className="max-w-[82%] rounded-2xl rounded-tl-sm border border-[#0D3B33]/10 bg-white p-3.5 shadow-sm">
                  <p className="text-[#17231F]">
                    Hola, vi su anuncio. Quiero cotizar el servicio para mi empresa.
                  </p>
                  <span className="mt-1 block text-right text-[10px] text-[#17231F]/40">10:42 AM</span>
                </div>

                {/* Respuesta Salesbot */}
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#15795E] p-3.5 text-white shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/75">
                    Salesbot • Angelo Kommo
                  </p>
                  <p className="mt-1">
                    ¡Hola Carlos! Con gusto te ayudo. ¿Cuántos asesores atienden WhatsApp en tu equipo hoy?
                  </p>
                  <span className="mt-1 block text-right text-[10px] text-white/70">10:42 AM ✓✓</span>
                </div>

                {/* Respuesta cliente */}
                <div className="max-w-[75%] rounded-2xl rounded-tl-sm border border-[#0D3B33]/10 bg-white p-3.5 shadow-sm">
                  <p className="text-[#17231F]">Somos 6 vendedores ahora mismo.</p>
                  <span className="mt-1 block text-right text-[10px] text-[#17231F]/40">10:43 AM</span>
                </div>

                {/* Evento interno del CRM */}
                <div className="flex items-center justify-between rounded-xl border border-[#15795E]/30 bg-[#15795E]/10 px-3.5 py-2.5 text-xs">
                  <span className="font-bold text-[#0D3B33]">⚡ Etapa: Lead Calificado</span>
                  <span className="font-semibold text-[#15795E]">Asignado a Asesor</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}