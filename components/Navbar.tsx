"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Easter Egg State
  const [clickCount, setClickCount] = useState(0);
  const [isMinecraftMode, setIsMinecraftMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("minecraft_mode") === "true") {
      setIsMinecraftMode(true);
      document.documentElement.classList.add("minecraft-mode");
    } else {
      document.documentElement.classList.remove("minecraft-mode");
    }
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (pathname?.includes('/work/')) {
    return null;
  }

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const isInfo = pathname === `/${lang}/info`;

  const handleNameClick = () => {
    if (isMinecraftMode) return;
    
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === 15) {
      setIsMinecraftMode(true);
      localStorage.setItem("minecraft_mode", "true");
      document.documentElement.classList.add("minecraft-mode");
    }
  };

  const disableMinecraftMode = () => {
    setIsMinecraftMode(false);
    setClickCount(0);
    localStorage.removeItem("minecraft_mode");
    document.documentElement.classList.remove("minecraft-mode");
  };

  return (
    <header className="w-full py-6 px-6 md:px-16 sticky top-0 z-50 bg-[var(--color-background-main)]/90 backdrop-blur-sm shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex md:hidden bg-[var(--color-navbar-bg)] rounded-full p-1 border border-[var(--color-border-main)]">
          <Link href={`/${lang}`} className={`px-5 py-2 rounded-full text-sm transition-colors ${isHome ? 'bg-[var(--color-hover)] text-[var(--color-text-main)]' : 'text-[var(--color-subtext)] hover:text-[var(--color-text-main)]'}`}>
            {lang === 'es' ? 'Trabajo' : 'Work'}
          </Link>
          <Link href={`/${lang}/info`} className={`px-5 py-2 rounded-full text-sm transition-colors ${isInfo ? 'bg-[var(--color-hover)] text-[var(--color-text-main)]' : 'text-[var(--color-subtext)] hover:text-[var(--color-text-main)]'}`}>
            Info
          </Link>
        </div>
        
        <div className="flex items-center md:hidden gap-2">
          {isMinecraftMode && (
            <button onClick={disableMinecraftMode} className="px-2 py-1 font-bold !bg-[#aa0000] !border-[#660000] !text-white !shadow-none animate-pulse mr-2">QUIT</button>
          )}
          <LanguageToggle lang={lang} />
          <ThemeToggle />
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-navbar-bg)] border border-[var(--color-border-main)] text-[var(--color-text-main)] transition-colors hover:bg-[var(--color-hover)] shrink-0"
            >
              <span className="text-xl">@</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-14 w-48 bg-[var(--color-surface)] border border-[var(--color-border-main)] rounded-2xl shadow-lg flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <a 
                  href="https://www.linkedin.com/in/alejandro-españa-78b217331" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-4 text-[var(--color-text-main)] hover:bg-[var(--color-hover)] transition-colors border-b border-[var(--color-border-main)] flex items-center justify-between"
                >
                  LinkedIn <span className="text-sm">↗</span>
                </a>
                <a 
                  href="/docs/Hoja de Vida_AlejandroEspaña.pdf" 
                  download="Hoja de Vida_AlejandroEspaña.pdf"
                  className="px-5 py-4 text-[var(--color-text-main)] hover:bg-[var(--color-hover)] transition-colors flex items-center justify-between"
                >
                  CV <span className="text-sm">↓</span>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex flex-col items-start cursor-pointer text-left" onClick={handleNameClick}>
          <div className="text-[var(--color-text-main)] text-xl tracking-wide hover:opacity-80 transition-opacity">
            Alejandro España
          </div>
          <span className="text-[var(--color-subtext)] text-sm tracking-widest uppercase mt-1 select-none">
            {lang === 'es' ? 'Desarrollador de Software' : 'Software Developer'}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:hidden w-full items-start cursor-pointer text-left" onClick={handleNameClick}>
        <div className="text-[var(--color-text-main)] text-xl tracking-wide hover:opacity-80 transition-opacity">
          Alejandro España
        </div>
        <span className="text-[var(--color-subtext)] text-sm tracking-widest uppercase mt-1 select-none">
          {lang === 'es' ? 'Desarrollador de Software' : 'Software Developer'}
        </span>
      </div>

      <div className="hidden md:flex bg-[var(--color-navbar-bg)] rounded-full p-1 border border-[var(--color-border-main)]">
        <Link href={`/${lang}`} className={`px-6 py-2 rounded-full text-sm transition-colors ${isHome ? 'bg-[var(--color-hover)] text-[var(--color-text-main)]' : 'text-[var(--color-subtext)] hover:text-[var(--color-text-main)]'}`}>
          {lang === 'es' ? 'Trabajo' : 'Work'}
        </Link>
        <Link href={`/${lang}/info`} className={`px-6 py-2 rounded-full text-sm transition-colors ${isInfo ? 'bg-[var(--color-hover)] text-[var(--color-text-main)]' : 'text-[var(--color-subtext)] hover:text-[var(--color-text-main)]'}`}>
          Info
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-main)] uppercase tracking-wide">
        {isMinecraftMode && (
          <button onClick={disableMinecraftMode} className="px-4 py-2 font-bold !bg-[#aa0000] !border-[#660000] !text-white !shadow-none animate-pulse">
            QUIT
          </button>
        )}
        <LanguageToggle lang={lang} />
        <ThemeToggle />
        <a href="/docs/Hoja de Vida_AlejandroEspaña.pdf" download="Hoja de Vida_AlejandroEspaña.pdf" className="hover:text-[var(--color-accent-main)] transition-colors flex items-center gap-1">CV <span>↓</span></a>
        <a href="https://www.linkedin.com/in/alejandro-españa-78b217331" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-main)] transition-colors flex items-center gap-1">LinkedIn <span>↗</span></a>
      </div>

    </header>
  );
}
