export default function Footer() {
  const currentYear = new Date().getFullYear();

  const redes = [
    {
      nombre: "Instagram",
      href: "#",
      icono: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      nombre: "TikTok",
      href: "#",
      icono: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      nombre: "LinkedIn",
      href: "#",
      icono: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      nombre: "YouTube",
      href: "#",
      icono: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0D3B33] text-[#F3F8F6]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        
        {/* Fila superior: Marca + Redes sociales a la izquierda, Navegación a la derecha */}
        <div className="flex flex-col items-start justify-between gap-10 border-b border-[#F3F8F6]/15 pb-10 md:flex-row md:items-center">
          
          <div>
            <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#15795E] text-sm font-black text-white">
                A
              </span>
              <span>
                Angelo <span className="text-[#1F8A68]">Kommo</span>
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#F3F8F6]/70">
              Implementación, automatización y arquitectura de embudos comerciales en WhatsApp con Kommo CRM.
            </p>

            {/* Botones de redes sociales */}
            <div className="mt-5 flex items-center gap-3">
              {redes.map((red) => (
                <a
                  key={red.nombre}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.nombre}
                  title={red.nombre}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F3F8F6]/15 bg-[#F3F8F6]/5 text-[#F3F8F6]/80 transition hover:-translate-y-0.5 hover:border-[#1F8A68] hover:bg-[#15795E] hover:text-white"
                >
                  {red.icono}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <nav className="flex flex-wrap gap-6 text-sm font-medium text-[#F3F8F6]/80">
            <a href="#beneficios" className="transition hover:text-white">
              Beneficios
            </a>
            <a href="#rubros" className="transition hover:text-white">
              Rubros
            </a>
            <a href="#proceso" className="transition hover:text-white">
              Cómo funciona
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Solicitar Demo
            </a>
          </nav>

        </div>

        {/* Fila inferior: Derechos reservados */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[#F3F8F6]/60 sm:flex-row">
          <p>© {currentYear} Angelo Kommo. Todos los derechos reservados.</p>
          <p>Sitio Web desarrollado por Diego Irribarren</p>
        </div>

      </div>
    </footer>
  );
}