import { getProjectsData } from "@/data/projects";
import Link from "next/link";
import ProjectStickyNav from "@/components/ProjectStickyNav";

export default async function WorkDetails({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const projects = getProjectsData(lang);
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-[var(--color-text-main)] w-full text-center mt-24 text-2xl font-['Protest_Revolution'] tracking-wider">Proyecto no encontrado</div>;

  const textDict = lang === 'en' ? {
    back: "Back",
    roleLabel: "Role and Tasks",
    teamLabel: "Team",
    durationLabel: "Duration",
    descTitle: "General Description",
    techTitle: "Technologies",
    annexesTitle: "Annexes"
  } : {
    back: "Atrás",
    roleLabel: "Rol y Tareas",
    teamLabel: "Equipo",
    durationLabel: "Duración",
    descTitle: "Descripción General",
    techTitle: "Tecnologías",
    annexesTitle: "Anexos"
  };

  return (
    <main className="w-full relative flex flex-col items-center pt-24 pb-32 px-4 md:px-16 animate-in fade-in duration-500 max-w-[100vw] overflow-x-hidden">

      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50 lg:hidden xl:block">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-[var(--color-text-main)] hover:text-white hover:bg-[var(--color-hover)] transition-all bg-[var(--color-background-main)] border border-[var(--color-border-main)] px-6 py-2.5 rounded-full shadow-lg text-sm backdrop-blur-sm font-['Protest_Revolution'] tracking-widest"
        >
          <span className="text-lg">←</span> {textDict.back}
        </Link>
      </div>


      <ProjectStickyNav lang={lang} />

      {/* 1. Hero */}
      <section id="hero" className="w-full max-w-5xl flex flex-col items-center text-center mt-12 md:mt-24">
        <h1 className="text-5xl md:text-7xl text-[var(--color-text-main)] font-['Protest_Revolution'] tracking-widest text-glow mb-6">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-[var(--color-subtext)] font-['Protest_Revolution'] tracking-wider mb-8">
          {project.subtitle}
        </p>
        <p className="text-lg text-[var(--color-text-main)] max-w-2xl opacity-90 mx-auto font-['Protest_Revolution'] tracking-widest">
          {project.tagline}
        </p>

        {/* Aspect Video Main Placeholder */}
        <div className="w-full aspect-video bg-[var(--color-surface)] border border-[var(--color-border-main)] rounded-[2rem] mt-16 flex items-center justify-center card-glow relative overflow-hidden">
          {project.heroImage ? (
            <img src={project.heroImage} alt={project.title} className="object-cover w-full h-full" />
          ) : (
            <span className="text-[var(--color-subtext)] text-lg tracking-widest font-['Protest_Revolution'] uppercase">Video / Imagen Interactiva</span>
          )}
        </div>
      </section>

      {/* 2. Descripcion General */}
      <section id="descripcion" className="flex flex-col lg:flex-row gap-16 lg:gap-32 mt-32 mb-32 border-t border-[var(--color-border-main)]/50 pt-24 w-full justify-between items-start max-w-6xl">
        {/* Left Col */}
        <div className="w-full lg:w-1/3 flex flex-col gap-14 font-['Protest_Revolution'] tracking-wider">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[var(--color-text-main)] text-lg border-b border-[var(--color-border-main)] pb-2 inline-block mb-3">{textDict.roleLabel}</p>
              <ul className="list-disc pl-5 mt-2 text-[var(--color-subtext)] flex flex-col gap-2 text-sm leading-relaxed">
                {project.role.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-8">
              <p className="text-[var(--color-text-main)] text-lg border-b border-[var(--color-border-main)] pb-2 inline-block">{textDict.teamLabel}</p>
              <ul className="list-none text-[var(--color-subtext)] flex flex-col gap-2 text-sm mt-2">
                {project.team.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-8">
              <p className="text-[var(--color-text-main)] text-lg border-b border-[var(--color-border-main)] pb-2 inline-block">{textDict.durationLabel}</p>
              <p className="text-[var(--color-subtext)] text-sm tracking-widest mt-2 uppercase">{project.duration}</p>
            </div>
          </div>
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8 text-[var(--color-subtext)] font-['Protest_Revolution'] tracking-wider leading-relaxed text-sm md:text-base">
          <h2 className="text-3xl text-[var(--color-text-main)] mb-4">{textDict.descTitle}</h2>
          {project.summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 3. Tecnologias */}
      <section id="tecnologias" className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 border-t border-[var(--color-border-main)]/50 pt-24 w-full justify-between items-start max-w-6xl">
        {/* Left Col */}
        <div className="w-full lg:w-1/3 flex flex-col gap-12 font-['Protest_Revolution'] tracking-wider">
          <h2 className="text-3xl text-[var(--color-text-main)] mb-2">{textDict.techTitle}</h2>
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12 font-['Protest_Revolution'] tracking-wider">
          {project.technologies.map((tech, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="text-xl text-[var(--color-text-main)] border-b border-[var(--color-border-main)] pb-2 inline-block max-w-max">{tech.category}</h3>
              <ul className="flex flex-col gap-3 text-[var(--color-subtext)]">
                {tech.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Anexos */}
      <section id="anexos" className="border-t border-[var(--color-border-main)]/50 pt-24 flex flex-col mb-12 w-full max-w-6xl">
        <h2 className="text-3xl font-['Protest_Revolution'] tracking-wider mb-16 text-center lg:text-left text-[var(--color-text-main)]">{textDict.annexesTitle}</h2>

        <div className="grid gap-12 lg:gap-16 w-full grid-cols-1">
          {project.annexes.map((anexo, i) => (
            <div key={i} className="flex flex-col 2xl:flex-row gap-6 lg:gap-8 items-center 2xl:items-start w-full group">
              <div className="w-full 2xl:w-1/2 min-h-[200px] aspect-video bg-[var(--color-surface)] border border-[var(--color-border-main)] rounded-[1.5rem] flex items-center justify-center shadow-md relative overflow-hidden shrink-0 group-hover:border-[var(--color-border-hover)] transition-colors duration-300">
                {anexo.imageUrl ? (
                  <img src={anexo.imageUrl} alt="Anexo" className="object-cover w-full h-full" />
                ) : (
                  <span className="text-[var(--color-subtext)] font-['Protest_Revolution'] text-sm uppercase tracking-widest">Anexo PlaceHolder</span>
                )}
              </div>
              {anexo.description && (
                <div className="w-full 2xl:w-1/2 flex items-center h-full">
                  <p className="text-[var(--color-subtext)] font-['Protest_Revolution'] tracking-wider text-sm md:text-base leading-relaxed p-4">
                    {anexo.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="flex flex-col gap-4 mt-24">
            {project.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-subtext)] hover:text-white transition-colors text-sm underline underline-offset-8 decoration-[var(--color-border-main)] font-['Protest_Revolution'] flex items-center gap-2 max-w-max tracking-widest">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
