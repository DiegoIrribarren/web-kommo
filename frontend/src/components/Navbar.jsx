export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0D3B33]/10 bg-[#F3F8F6]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        
        {/* 1. Marca / Logo */}
        <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#0D3B33]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#15795E] text-sm font-black text-white">
            A
          </span>
          <span>
           Angelo <span className="text-[#1F8A68]">Kommo</span>
          </span>
        </a>

        {/* 2. Enlaces de navegación */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#17231F] md:flex">
          <a href="#beneficios" className="transition hover:text-[#15795E]">
            Beneficios
          </a>
          <a href="#proceso" className="transition hover:text-[#15795E]">
            Cómo funciona
          </a>
          <a href="#contacto" className="transition hover:text-[#15795E]">
            Solicitar Demo
          </a>
        </nav>

        {/* 3. Botón principal de acción */}
        <a
          href="#contacto"
          className="rounded-lg bg-[#15795E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F8A68]"
        >
          Empezar ahora
        </a>

      </div>
    </header>
  );
}