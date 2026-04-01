import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#3e3d3d] mt-24 pt-12 pb-16 px-8 md:px-16 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-[var(--color-text-main)] text-sm uppercase tracking-widest">Principal</h3>
            <Link href="/" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors">Work</Link>
            <Link href="#" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors">Info</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[var(--color-text-main)] text-sm uppercase tracking-widest">Contacto</h3>
            <a href="#" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors flex items-center gap-1">CV ↗</a>
            <a href="#" className="text-[var(--color-subtext)] hover:text-[var(--color-text-main)] transition-colors flex items-center gap-1">LinkedIn ↗</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm text-[var(--color-subtext)] tracking-wider">
        <p>@2026 Alejandro España. Todos los derechos reservados</p>
        <p>Hecho con amor y un chingo de cafe (25% Azucar, 70% Cafe).</p>
      </div>
    </footer>
  );
}
