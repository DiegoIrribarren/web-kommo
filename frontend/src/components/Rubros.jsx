import { useState } from "react";

export default function Rubros() {
  const rubros = [
    {
      id: "clinicas",
      nombre: "Clínicas y Salud",
      badge: "Agendamiento automático",
      titulo: "Llena tu agenda de citas sin saturar a recepción",
      descripcion:
        "El bot responde consultas de tratamientos, valida disponibilidad por sede y envía recordatorios automáticos 24 horas antes para reducir inasistencias.",
      flujo: [
        "Paciente escribe preguntando por limpieza o implantes",
        "Bot muestra sedes, horarios disponibles y agenda cita",
        "Recordatorio automático por WhatsApp un día antes",
      ],
      metrica: "-65% inasistencias a citas",
    },
    {
      id: "inmobiliarias",
      nombre: "Inmobiliarias",
      badge: "Filtrado de compradores",
      titulo: "Separa curiosos de compradores reales al instante",
      descripcion:
        "Califica presupuesto, distrito de interés y tipo de financiamiento antes de pasar el contacto a un asesor comercial.",
      flujo: [
        "Lead llega desde portal inmobiliario o anuncio de Facebook",
        "Bot envía brochure PDF y pregunta rango de inversión",
        "Asesor recibe solo prospectos con presupuesto validado",
      ],
      metrica: "3x más visitas calificadas",
    },
    {
      id: "educacion",
      nombre: "Educación y Cursos",
      badge: "Inscripciones 24/7",
      titulo: "Convierte interesados en alumnos matriculados",
      descripcion:
        "Entrega temarios, modalidades y fechas de inicio al instante, haciendo seguimiento automático a quienes pidieron información y aún no pagan.",
      flujo: [
        "Alumno pide información del curso o diplomado",
        "Bot envía malla curricular, inversión y link de pago",
        "Seguimiento automático a las 24h si quedó pendiente",
      ],
      metrica: "+48% cierre de matrículas",
    },
  ];

  const [activo, setActivo] = useState(rubros[0]);

  return (
    <section id="rubros" className="border-t border-[#0D3B33]/10 bg-[#F3F8F6] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15795E]">
            Adaptado a tu negocio
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0D3B33] sm:text-4xl">
            Mira cómo funciona Kommo en tu industria
          </h2>
          <p className="mt-3 text-base text-[#17231F]/80">
            Selecciona un rubro para ver un ejemplo real de automatización.
          </p>
        </div>

        {/* Pestañas interactivas */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {rubros.map((rubro) => {
            const esActivo = activo.id === rubro.id;
            return (
              <button
                key={rubro.id}
                type="button"
                onClick={() => setActivo(rubro)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  esActivo
                    ? "bg-[#0D3B33] text-white shadow-md shadow-[#0D3B33]/15"
                    : "border border-[#0D3B33]/15 bg-white text-[#17231F] hover:border-[#15795E]"
                }`}
              >
                {rubro.nombre}
              </button>
            );
          })}
        </div>

        {/* Tarjeta dinámica del rubro seleccionado */}
        <div className="mt-10 grid items-center gap-8 rounded-3xl border border-[#0D3B33]/10 bg-white p-8 shadow-xl shadow-[#0D3B33]/5 lg:grid-cols-12 lg:p-10">
          
          {/* Explicación izquierda */}
          <div className="lg:col-span-7">
            <span className="inline-block rounded-md bg-[#15795E]/15 px-3 py-1 text-xs font-bold text-[#15795E]">
              {activo.badge}
            </span>
            <h3 className="mt-4 text-2xl font-extrabold text-[#0D3B33] sm:text-3xl">
              {activo.titulo}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#17231F]/80">
              {activo.descripcion}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F3F8F6] px-4 py-2.5 text-sm font-bold text-[#0D3B33]">
              <span className="text-[#1F8A68]">▲</span>
              Impacto promedio: {activo.metrica}
            </div>
          </div>

          {/* Flujo visual derecha */}
          <div className="rounded-2xl border border-[#0D3B33]/10 bg-[#F3F8F6] p-6 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#17231F]/60">
              Flujo Automatizado
            </p>
            <div className="mt-4 space-y-3">
              {activo.flujo.map((paso, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#15795E] text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <p className="text-sm font-medium text-[#17231F]">{paso}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}