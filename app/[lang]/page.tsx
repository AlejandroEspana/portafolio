import { getProjectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const projects = getProjectsData(lang);
  
  const text = lang === 'en' ? {
    quote: "Every line of code has a purpose. If it doesn't, it doesn't exist",
    role: "Developer in Progress",
    uni: "Trained at UCC"
  } : {
    quote: "Cada línea de código tiene a un propósito. Si no lo tiene, no existe",
    role: "Desarrollador en Proceso",
    uni: "Formado en la UCC"
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-16 mt-16 mb-24">
      
      {/* Hero Section */}
      <section className="w-full flex-grow flex flex-col items-center justify-center p-6 md:p-12 mb-16 relative">
        <div className="w-full max-w-5xl rounded-[2rem] border border-[var(--color-border-main)] bg-gradient-to-br from-[var(--color-grad-start)] to-[var(--color-grad-end)] p-10 md:p-16 lg:p-24 relative overflow-hidden flex flex-col justify-between gap-16 md:gap-32">
          <div className="flex flex-col gap-6 md:gap-8 z-10 w-full mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl text-[var(--color-text-main)] leading-normal md:leading-relaxed tracking-wider text-glow text-left max-w-4xl">
              {text.quote}
            </h1>
          </div>
          
          {/* Bottom section: Photo + Role */}
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-end justify-between w-full z-10 gap-10 sm:gap-0 mt-auto">
            
            {/* Foto inferior izquierda */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border border-[var(--color-border-main)] overflow-hidden shadow-[var(--shadow-sphere)] opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 shrink-0">
               <img src="/Foto Alejandro.svg" alt="Alejandro España" className="w-full h-full object-cover" />
            </div>

            {/* Texto inferior derecha */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--color-text-main)] tracking-widest text-glow opacity-80">
                {text.role}
              </h2>
              <p className="text-xl md:text-2xl text-[var(--color-subtext)] tracking-wider">
                {text.uni}
              </p>
            </div>
            
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
            lang={lang}
          />
        ))}
      </section>

    </div>
  );
}
