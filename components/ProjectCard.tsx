import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  tagline: string;
  heroImage?: string;
  lang: string;
}

export default function ProjectCard({ id, title, tagline, heroImage, lang }: ProjectCardProps) {
  return (
    <Link href={`/${lang}/work/${id}`} className="w-full block group cursor-pointer transition-transform duration-300 hover:-translate-y-2 focus-within:-translate-y-2 outline-none card-glow rounded-[2rem] mb-12">
      <div className="w-full rounded-[2rem] border border-[var(--color-border-main)] bg-gradient-to-br from-[var(--color-grad-start)] to-[var(--color-grad-end)] p-8 md:p-12 flex flex-col transition-all duration-300 relative overflow-hidden group-hover:border-[var(--color-border-hover)]">
        
        {/* Header section w/ Title & Arrow */}
        <div className="flex justify-between items-start z-10 w-full mb-8 gap-4">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-[var(--color-text-main)] tracking-wide font-['Protest_Revolution']">{title}</h2>
            <p className="text-[var(--color-subtext)] text-lg md:text-xl leading-relaxed mt-2 font-['Protest_Revolution'] tracking-wider">{tagline}</p>
          </div>
          
          <div className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 transform shrink-0 mt-2">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-main)]">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[var(--color-surface-elevated)] rounded-2xl border border-[var(--color-surface)] mt-4 flex items-center justify-center relative overflow-hidden group-hover:border-[var(--color-border-main)] transition-colors">
           {heroImage ? (
             <img src={heroImage} alt={title} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105" />
           ) : (
             <span className="text-[var(--color-subtext)] opacity-50 uppercase tracking-[0.2em] text-sm font-sans font-bold">Image Placeholder</span>
           )}
        </div>
        
      </div>
    </Link>
  );
}
