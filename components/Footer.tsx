export default function Footer({ lang }: { lang: string }) {
  const dict = lang === 'en' ? {
    home: "Main",
    work: "Work",
    info: "Info",
    social: "Social",
    rights: "All rights reserved. Portfolio designed by Alejandro España."
  } : {
    home: "Principal",
    work: "Trabajo",
    info: "Info",
    social: "Sociales",
    rights: "Todos los derechos reservados. Portafolio diseñado por Alejandro España."
  };

  return (
    <footer className="w-full border-t border-[var(--color-border-main)] mt-24 pt-12 pb-16 px-8 flex flex-col items-center text-center gap-12 font-['Protest_Revolution'] tracking-widest">
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-[var(--color-text-main)] text-sm uppercase">{dict.home}</h3>
          <a href={`/${lang}`} className="text-[var(--color-subtext)] hover:text-white transition-colors">{dict.work}</a>
          <a href={`/${lang}/info`} className="text-[var(--color-subtext)] hover:text-white transition-colors">{dict.info}</a>
        </div>
        
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-[var(--color-text-main)] text-sm uppercase">{dict.social}</h3>
          <a href="https://www.linkedin.com/in/alejandro-españa-78b217331" target="_blank" rel="noopener noreferrer" className="text-[var(--color-subtext)] hover:text-white transition-colors flex items-center gap-2">
            LinkedIn <span className="text-sm">↗</span>
          </a>
          <a href="/docs/Hoja de Vida_AlejandroEspaña.pdf" download="Hoja de Vida_AlejandroEspaña.pdf" className="text-[var(--color-subtext)] hover:text-white transition-colors flex items-center gap-2">
            CV <span className="text-sm">↓</span>
          </a>
        </div>
      </div>
      <p className="text-[var(--color-subtext)] text-sm opacity-60 max-w-sm mt-8">
        © 2026 Alejandro España. {dict.rights}
      </p>
    </footer>
  );
}
