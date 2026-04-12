import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border-main)] mt-24 pt-12 pb-16 px-8 flex flex-col items-center text-center gap-12 font-['Protest_Revolution'] tracking-widest">
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-[var(--color-text-main)] text-sm uppercase">Principal</h3>
          <Link href="/" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors text-sm">Work</Link>
          <Link href="/info" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors text-sm">Info</Link>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-[var(--color-text-main)] text-sm uppercase">Contacto</h3>
          <a href="/docs/Hoja de Vida_AlejandroEspaña.pdf" download="Hoja de Vida_AlejandroEspaña.pdf" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors flex items-center justify-center gap-1 text-sm">CV <span className="text-xs">↓</span></a>
          <a href="https://www.linkedin.com/in/alejandro-españa-78b217331" target="_blank" rel="noopener noreferrer" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors flex items-center justify-center gap-1 text-sm">LinkedIn ↗</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 text-xs md:text-sm text-[var(--color-subtext)]">
        <p>@2026 Alejandro España. Todos los derechos reservados</p>
        <p className="opacity-80">Hecho con amor y un chingo de cafe (25% Azucar, 70% Cafe).</p>
      </div>
    </footer>
  );
}
