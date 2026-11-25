import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    whatsapp: "",
    servicio: "Implementación Kommo desde cero",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" className="border-t border-[#0D3B33]/10 bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        
        {/* Columna izquierda: Llamado a la acción */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#15795E]">
            Agenda tu diagnóstico
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0D3B33] sm:text-4xl">
            ¿Listo para automatizar tu WhatsApp con Kommo?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#17231F]/80">
            Déjanos tus datos y recibe una demostración personalizada de cómo quedaría tu embudo comercial funcionando en piloto automático.
          </p>

          <ul className="mt-6 space-y-3 text-sm font-medium text-[#17231F]">
            <li className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#15795E]/15 text-xs font-bold text-[#15795E]">
                ✓
              </span>
              Sesión estratégica de 20 minutos sin costo
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#15795E]/15 text-xs font-bold text-[#15795E]">
                ✓
              </span>
              Mapa de flujo sugerido para tu rubro
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#15795E]/15 text-xs font-bold text-[#15795E]">
                ✓
              </span>
              Cotización transparente según tamaño de equipo
            </li>
          </ul>
        </div>

        {/* Columna derecha: Tarjeta del formulario */}
        <div className="rounded-2xl border border-[#0D3B33]/10 bg-[#F3F8F6] p-8 shadow-lg shadow-[#0D3B33]/5">
          {enviado ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#15795E] text-xl font-bold text-white">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#0D3B33]">
                ¡Solicitud recibida, {formData.nombre}!
              </h3>
              <p className="mt-2 text-sm text-[#17231F]/80">
                Hemos registrado tu interés en <strong>{formData.servicio}</strong>. En el siguiente paso conectaremos este botón directo con WhatsApp y Kommo CRM.
              </p>
              <button
                type="button"
                onClick={() => setEnviado(false)}
                className="mt-6 rounded-lg border border-[#0D3B33]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0D3B33] transition hover:border-[#15795E]"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0D3B33]">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej. María Gómez"
                  className="mt-1.5 w-full rounded-xl border border-[#0D3B33]/15 bg-white px-4 py-2.5 text-sm text-[#17231F] outline-none transition focus:border-[#15795E]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D3B33]">
                  Empresa o negocio
                </label>
                <input
                  type="text"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Ej. Clínica Dental Sonrisa"
                  className="mt-1.5 w-full rounded-xl border border-[#0D3B33]/15 bg-white px-4 py-2.5 text-sm text-[#17231F] outline-none transition focus:border-[#15795E]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D3B33]">
                  WhatsApp de contacto
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Ej. +51 987 654 321"
                  className="mt-1.5 w-full rounded-xl border border-[#0D3B33]/15 bg-white px-4 py-2.5 text-sm text-[#17231F] outline-none transition focus:border-[#15795E]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D3B33]">
                  ¿Qué necesitas hoy?
                </label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-[#0D3B33]/15 bg-white px-4 py-2.5 text-sm text-[#17231F] outline-none transition focus:border-[#15795E]"
                >
                  <option value="Implementación Kommo desde cero">
                    Implementación Kommo desde cero
                  </option>
                  <option value="Diseño de Salesbots y automatización">
                    Diseño de Salesbots y automatización
                  </option>
                  <option value="Integración API / Webhooks avanzados">
                    Integración API / Webhooks avanzados
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 w-full cursor-pointer rounded-xl bg-[#15795E] px-6 py-3.5 text-base font-bold text-white shadow-md shadow-[#15795E]/20 transition hover:bg-[#1F8A68]"
              >
                Solicitar Demo Gratis
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}