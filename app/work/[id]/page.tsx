import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <main className="relative w-full text-[var(--color-text-main)] px-6 md:px-16 xl:pr-72 max-w-[1600px] mx-auto pb-32 pt-8 animate-in fade-in duration-500">
      
      {/* Boton Back Fijo Arriba (Desktop) o Header (Mobile) */}
      <div className="mb-12 lg:mb-0 lg:absolute lg:top-8 lg:left-8 z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[var(--color-text-main)] hover:text-white hover:bg-[#464545] transition-all bg-[#2c2b2b] border border-[#3e3d3d] px-6 py-2.5 rounded-full shadow-sm text-sm"
        >
          <span className="text-lg">←</span> Back
        </Link>
      </div>

      {/* Sticky Right Nav (Desktop Only) */}
      <nav className="hidden xl:flex flex-col fixed right-16 top-1/3 gap-8 text-sm tracking-widest uppercase font-['Protest_Revolution']">
        <a href="#hero" className="text-[var(--color-text-main)] hover:opacity-80 transition-opacity">Contenido</a>
        <a href="#descripcion" className="text-[var(--color-subtext)] hover:text-white transition-colors">Descripcion General</a>
        <a href="#tecnologias" className="text-[var(--color-subtext)] hover:text-white transition-colors">Tecnologias</a>
        <a href="#anexos" className="text-[var(--color-subtext)] hover:text-white transition-colors">Anexos</a>
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center mt-8 lg:mt-12 w-full">
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-[var(--color-text-main)] text-glow mb-4 font-['Protest_Revolution'] tracking-wider drop-shadow-xl">
          {project.title}
        </h1>
        <p className="text-sm md:text-base text-[var(--color-subtext)] tracking-widest uppercase font-['Protest_Revolution'] opacity-80">
          {project.subtitle}
        </p>

        {/* Aspect Video Main Placeholder */}
        <div className="w-full aspect-video bg-[#2c2b2b] border border-[#3e3d3d] rounded-[2rem] mt-16 flex items-center justify-center card-glow relative overflow-hidden">
          {project.heroImage ? (
            <img src={project.heroImage} alt={project.title} className="object-cover w-full h-full" />
          ) : (
            <span className="text-[var(--color-subtext)] tracking-widest text-sm md:text-xl font-['Protest_Revolution'] opacity-50">IMAGE PLACEHOLDER</span>
          )}
        </div>
      </section>

      {/* 2. Descripcion General */}
      <section id="descripcion" className="flex flex-col lg:flex-row gap-16 lg:gap-32 mt-32 mb-32 border-t border-[#3e3d3d]/50 pt-24">
        {/* Left Col */}
        <div className="w-full lg:w-1/3 flex flex-col gap-14 font-['Protest_Revolution'] tracking-wider">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-[var(--color-text-main)]">Mi Rol</h2>
            <div>
              <p className="text-[var(--color-text-main)] text-lg border-b border-[#3e3d3d] pb-2 inline-block mb-3">{project.role.title}</p>
              <ul className="list-disc pl-5 mt-2 text-[var(--color-subtext)] flex flex-col gap-2 text-sm leading-relaxed">
                {project.role.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-[var(--color-text-main)]">Equipo Desarrollo</h2>
            <ul className="flex flex-col gap-3 text-[var(--color-subtext)] text-sm">
              {project.team.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-[var(--color-text-main)]">Tiempo Desarrollo</h2>
            <p className="text-[var(--color-subtext)] text-sm">{project.duration}</p>
          </div>
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
           <h2 className="text-3xl font-['Protest_Revolution'] tracking-widest text-[var(--color-text-main)] mb-2">Resumen</h2>
           <div className="flex flex-col gap-8 text-[var(--color-subtext)] leading-loose text-base md:text-lg font-['Protest_Revolution'] tracking-wider opacity-90">
             {project.summary.map((p, i) => (
               <p key={i}>{p}</p>
             ))}
           </div>
        </div>
      </section>

      {/* 3. Tecnologias */}
      <section id="tecnologias" className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 border-t border-[#3e3d3d]/50 pt-24">
        {/* Left Col */}
        <div className="w-full lg:w-1/3 flex flex-col gap-12 font-['Protest_Revolution'] tracking-wider">
          <h2 className="text-3xl text-[var(--color-text-main)] mb-2">Tecnologias</h2>
          {project.technologies.map((tech, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="text-lg text-[var(--color-text-main)]">{tech.category}</h3>
              <ul className="list-disc pl-5 text-[var(--color-subtext)] text-sm flex flex-col gap-2">
                {tech.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8 font-['Protest_Revolution'] tracking-wider">
          <h2 className="text-2xl text-[var(--color-text-main)] w-full max-w-sm leading-snug">Nuestro Proyecto en mano de Todos</h2>
          {project.links.length > 0 ? (
            <div className="flex flex-col gap-4">
              {project.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-subtext)] hover:text-white transition-colors text-sm underline underline-offset-8 decoration-[#3e3d3d] flex items-center gap-2 max-w-max">
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
             <p className="text-[var(--color-subtext)] text-sm italic opacity-70">Top Secret / Privado</p>
          )}
        </div>
      </section>

      {/* 4. Anexos */}
      <section id="anexos" className="border-t border-[#3e3d3d]/50 pt-24 flex flex-col mb-12">
          <h2 className="text-3xl font-['Protest_Revolution'] tracking-wider mb-16 text-center lg:text-left text-[var(--color-text-main)]">Anexos</h2>
          
          <div className={`grid gap-12 lg:gap-16 w-full ${
            project.annexes.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
          }`}>
             {project.annexes.map((anexo, i) => (
               <div key={i} className="flex flex-col 2xl:flex-row gap-6 lg:gap-8 items-center 2xl:items-start w-full group">
                 <div className="w-full 2xl:w-1/2 min-h-[200px] aspect-video bg-[#2c2b2b] border border-[#3e3d3d] rounded-[1.5rem] flex items-center justify-center shadow-md relative overflow-hidden shrink-0 group-hover:border-[#5a5959] transition-colors duration-300">
                   {anexo.imageUrl ? (
                     <img src={anexo.imageUrl} alt="Anexo" className="object-cover w-full h-full" />
                   ) : (
                     <span className="text-[var(--color-subtext)] text-sm tracking-widest font-['Protest_Revolution'] opacity-50">ANEXO {i+1}</span>
                   )}
                 </div>
                 {anexo.description && (
                   <div className="w-full 2xl:w-1/2 text-sm text-[var(--color-subtext)] leading-relaxed font-['Protest_Revolution'] tracking-widest px-4 2xl:px-0">
                     {anexo.description}
                   </div>
                 )}
               </div>
             ))}
          </div>
      </section>
    </main>
  );
}
