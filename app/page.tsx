import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full px-4 md:px-16 mt-16 mb-24">
      
      {/* Hero Section */}
      <section className="w-full flex-grow flex flex-col items-center justify-center p-6 md:p-12 mb-16 relative">
        <div className="w-full max-w-5xl rounded-[2rem] border border-[var(--color-border-main)] bg-gradient-to-br from-[var(--color-grad-start)] to-[var(--color-grad-end)] p-10 md:p-16 lg:p-24 relative overflow-hidden flex flex-col justify-between gap-16 md:gap-32">
          
          <div className="flex flex-col gap-6 md:gap-8 z-10 w-full md:w-3/4">
            <h1 className="text-4xl md:text-6xl text-[var(--color-text-main)] leading-normal md:leading-relaxed tracking-wider text-glow text-left max-w-2xl">
              Cada línea de código tiene a un propósito. Si no lo tiene, no existe
            </h1>
          </div>
          
          <div className="flex flex-col items-end text-right w-full gap-2">
            <h2 className="text-2xl md:text-3xl text-[var(--color-text-main)] tracking-widest text-glow opacity-80">
              Desarrollador en Proceso
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-subtext)] tracking-wider">
              Formado en la UCC
            </p>
          </div>
          
        </div>
      </section>

      {/* Projects List */}
      <section className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-16">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            id={project.id}
            title={project.title} 
            tagline={project.tagline} 
            heroImage={project.heroImage}
          />
        ))}
      </section>

    </div>
  );
}
