"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageToggle({ lang }: { lang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLang = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    let newPath = pathname;
    if (pathname.startsWith(`/${lang}`)) {
       newPath = pathname.replace(new RegExp(`^/${lang}`), `/${nextLang}`);
    } else {
       newPath = `/${nextLang}${pathname}`;
    }
    
    // Un cookie de sesión (sin max-age) garantiza que volvamos a español al reabrir el navegador
    document.cookie = `NEXT_LOCALE=${nextLang}; path=/;`;
    router.push(newPath || `/${nextLang}`);
    router.refresh();
  };

  if (!mounted) return <div className="w-10 h-10"></div>;

  return (
    <button 
      onClick={toggleLang}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-navbar-bg)] border border-[var(--color-border-main)] text-[var(--color-text-main)] transition-colors hover:bg-[var(--color-hover)] shrink-0"
      title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="text-sm font-semibold uppercase font-['Protest_Revolution'] tracking-widest leading-none">{lang}</span>
    </button>
  );
}
