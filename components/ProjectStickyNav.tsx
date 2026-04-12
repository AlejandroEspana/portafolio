"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProjectStickyNav({ lang }: { lang: string }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Solo mostramos esta nav si estamos en ruta de proyecto 
    if (!pathname?.includes('/work/')) {
      setIsNavVisible(false);
      return;
    }

    const handleScroll = () => {
      // Mostrar la navbar después de scrollear un poco
      if (window.scrollY > 300) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      // Lógica sencilla de Intersection Observer para el Active State
      const sections = ["hero", "descripcion", "tecnologias", "anexos"];
      
      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si el borde superior está visible en la primera mitad de la pantalla
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (!isNavVisible) return null;

  const dict = lang === 'en' ? {
    hero: "Start",
    desc: "Description",
    tech: "Technologies",
    annexes: "Annexes"
  } : {
    hero: "Inicio",
    desc: "Descripción",
    tech: "Tecnologías",
    annexes: "Anexos"
  };

  const navLinks = [
    { id: "hero", label: dict.hero },
    { id: "descripcion", label: dict.desc },
    { id: "tecnologias", label: dict.tech },
    { id: "anexos", label: dict.annexes },
  ];

  return (
    <div className="fixed top-24 right-8 z-50 hidden xl:flex flex-col items-end gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
      <nav className="bg-[var(--color-background-main)]/80 backdrop-blur-md border border-[var(--color-border-main)] p-6 rounded-2xl shadow-xl flex flex-col gap-4 min-w-[200px]">
        <h4 className="text-[var(--color-text-main)] font-['Protest_Revolution'] tracking-widest text-sm border-b border-[var(--color-border-main)] pb-2 mb-2 uppercase">Menu</h4>
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`transition-all duration-300 font-['Protest_Revolution'] tracking-wider ${
                activeSection === link.id 
              ? "text-[var(--color-accent-main)] scale-105 origin-left" 
              : "text-[var(--color-subtext)] hover:text-[var(--color-text-main)] hover:scale-105 origin-left"
              }`}
            >
              <a 
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Back button shortcut */}
      <Link 
        href={`/${lang}`}
        className="w-full text-center py-3 bg-[var(--color-surface)] hover:bg-[var(--color-hover)] border border-[var(--color-border-main)] text-[var(--color-text-main)] rounded-xl font-['Protest_Revolution'] tracking-widest transition-colors shadow-md text-sm"
      >
        ← {lang === 'en' ? 'Back' : 'Atras'}
      </Link>
    </div>
  );
}
