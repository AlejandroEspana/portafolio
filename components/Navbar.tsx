"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si se hace clic afuera del componente
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

  if (pathname?.startsWith('/work/')) {
    return null;
  }

  return (
    <header className="w-full py-6 px-6 md:px-16 sticky top-0 z-50 bg-[var(--color-background-main)]/90 backdrop-blur-sm shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
      {/* Mobile Top Row / Desktop Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        
        {/* Mobile: Work/Info Pill */}
        <div className="flex md:hidden bg-[#2c2b2b] rounded-full p-1 border border-[#3e3d3d]">
          <Link href="/" className="px-5 py-2 rounded-full bg-[#464545] text-[var(--color-text-main)] text-sm transition-colors">
            Work
          </Link>
          <Link href="#" className="px-5 py-2 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text-main)] text-sm transition-colors">
            Info
          </Link>
        </div>
        
        {/* Mobile: @ Button con Dropdown */}
        <div className="flex md:hidden relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2c2b2b] border border-[#3e3d3d] text-[var(--color-text-main)] transition-colors hover:bg-[#464545]"
          >
            <span className="text-xl">@</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-14 w-48 bg-[#2c2b2b] border border-[#3e3d3d] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <a 
                href="https://www.linkedin.com/in/alejandro-españa-78b217331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-4 text-[var(--color-text-main)] hover:bg-[#3e3d3d] transition-colors border-b border-[#3e3d3d] flex items-center justify-between"
              >
                LinkedIn <span className="text-sm">↗</span>
              </a>
              <a 
                href="/docs/Hoja de Vida_AlejandroEspaña.pdf" 
                download="Hoja de Vida_AlejandroEspaña.pdf"
                className="px-5 py-4 text-[var(--color-text-main)] hover:bg-[#3e3d3d] transition-colors flex items-center justify-between"
              >
                CV <span className="text-sm">↓</span>
              </a>
            </div>
          )}
        </div>

        {/* Desktop Title */}
        <div className="hidden md:flex flex-col">
          <Link href="/" className="text-[var(--color-text-main)] text-xl tracking-wide hover:opacity-80 transition-opacity">
            Alejandro España
          </Link>
          <span className="text-[var(--color-subtext)] text-sm tracking-widest uppercase mt-1">
            Desarrollador de Software
          </span>
        </div>
      </div>

      {/* Mobile Title (Appears under top row) */}
      <div className="flex flex-col md:hidden w-full">
        <Link href="/" className="text-[var(--color-text-main)] text-xl tracking-wide hover:opacity-80 transition-opacity">
          Alejandro España
        </Link>
        <span className="text-[var(--color-subtext)] text-sm tracking-widest uppercase mt-1">
          Desarrollador de Software
        </span>
      </div>

      {/* Desktop Center Menu */}
      <div className="hidden md:flex bg-[#2c2b2b] rounded-full p-1 border border-[#3e3d3d]">
        <Link href="/" className="px-6 py-2 rounded-full bg-[#464545] text-[var(--color-text-main)] text-sm transition-colors">
          Work
        </Link>
        <Link href="#" className="px-6 py-2 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text-main)] text-sm transition-colors">
          Info
        </Link>
      </div>

      {/* Desktop Right Links */}
      <div className="hidden md:flex gap-6 text-sm text-[var(--color-text-main)] uppercase tracking-wide">
        <a href="/docs/Hoja de Vida_AlejandroEspaña.pdf" download="Hoja de Vida_AlejandroEspaña.pdf" className="hover:text-white transition-colors flex items-center gap-1">CV <span>↓</span></a>
        <a href="https://www.linkedin.com/in/alejandro-españa-78b217331" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <span>↗</span></a>
      </div>

    </header>
  );
}
