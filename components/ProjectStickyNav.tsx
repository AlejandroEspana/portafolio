"use client";

import { useEffect, useState } from "react";

export default function ProjectStickyNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Configuramos el observador para que detecte cuando una seccion entra al ~30% superior de la pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        // Encontramos qué sección está intersectando con el viewport
        // Para manejar múltiples intersecciones, nos quedamos con la que esté cruzando visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    // Observar todas las etiquetas section que tengan ID (hero, descripcion, tecnologias, anexos)
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const links = [
    { id: "hero", label: "Contenido" },
    { id: "descripcion", label: "Descripcion General" },
    { id: "tecnologias", label: "Tecnologias" },
    { id: "anexos", label: "Anexos" },
  ];

  return (
    <nav className="hidden xl:flex flex-col fixed right-16 top-1/3 gap-8 text-sm tracking-widest uppercase font-['Protest_Revolution'] z-40">
      {links.map((link) => (
        <a 
          key={link.id}
          href={`#${link.id}`} 
          className={`transition-colors duration-300 ${
            activeSection === link.id 
              ? "text-[var(--color-accent-main)] scale-105 origin-left" 
              : "text-[var(--color-subtext)] hover:text-white"
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
