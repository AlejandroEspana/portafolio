import { timeline, skills, testimonials, contacts, contactMessage } from "@/data/info";

export default function InfoPage() {
  return (
    <main className="w-full flex flex-col items-center pt-24 pb-32 animate-in fade-in duration-500 overflow-x-hidden">
      
      {/* 1. Sobre Mi & Inicio del Timeline */}
      <section className="w-full max-w-4xl px-6 md:px-16 flex flex-col relative">
        <h1 className="text-3xl md:text-4xl text-[var(--color-text-main)] font-['Protest_Revolution'] tracking-widest mb-6">Sobre mi</h1>
        
        <div className="flex flex-col gap-6 text-[var(--color-subtext)] text-sm md:text-base leading-relaxed font-['Protest_Revolution'] tracking-wider mb-24">
          <p>
            Construyo software con propósito. Soy estudiante de ingeniería de Software y me enfoco en transformar ideas complejas en soluciones claras, funcionales y escalables, combinando tecnologías emergentes como la realidad virtual y la inteligencia artificial en proyectos como PulmoMed. Me interesa crear experiencias que no solo funcionen, sino que realmente aporten valor, especialmente en entornos donde la tecnología puede marcar una diferencia real.
          </p>
          <p>
            Trabajo con mentalidad analítica y ejecución práctica: entiendo problemas, los descompongo y los convierto en soluciones eficientes. Me adapto rápido, aprendo constantemente y colaboro de forma activa, porque sé que el mejor software no se construye solo. Cada proyecto es una oportunidad para mejorar, optimizar y llevar una idea un paso más allá.
          </p>
        </div>

        {/* Esfera Superior (Generadora del Timeline) */}
        <div className="w-full flex justify-center relative h-16">
          <div className="w-12 h-12 bg-[#DFDFDF] rounded-full shrink-0 z-10 card-glow flex items-center justify-center translate-y-10 shadow-[0_0_40px_10px_rgba(223,223,223,0.3)]"></div>
          {/* Línea que arranca desde el centro de la esfera */}
          <div className="absolute w-[2px] bg-[#3e3d3d] h-full left-1/2 -ml-[1px] top-16 z-0"></div>
        </div>
      </section>

      {/* 2. Timeline Core */}
      <section className="w-full max-w-5xl px-6 md:px-16 flex flex-col items-center relative py-12">
        {/* Línea Central Continua */}
        <div className="absolute w-[2px] bg-[#3e3d3d] h-full left-1/2 md:left-1/2 left-[20px] -ml-[1px] top-0 z-0"></div>

        <div className="w-full flex flex-col gap-24 md:gap-32 my-12">
          {timeline.map((item, index) => {
            const isLeft = item.side === "left";
            return (
              <div 
                key={index} 
                className={`relative w-full flex ${isLeft ? "justify-start md:justify-start" : "justify-start md:justify-end"} items-center`}
              >
                {/* Desktop Dot: A los lados de la línea central */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#DFDFDF] z-10 ${
                  isLeft ? "right-[calc(50%+1.5rem)]" : "left-[calc(50%+1.5rem)]"
                }`}></div>
                
                {/* Mobile Dot: Separado a la derecha de la línea lateral */}
                <div className="md:hidden absolute left-[36px] w-4 h-4 rounded-full bg-[#DFDFDF] z-10 top-1/2 -translate-y-1/2"></div>
                
                {/* Content Box */}
                <div className={`w-[calc(100%-60px)] md:w-[calc(50%-4rem)] ml-[60px] md:ml-0 font-['Protest_Revolution'] tracking-wider leading-relaxed ${
                  isLeft ? "md:pr-0 md:text-left" : "md:pl-0 text-left"
                } text-[var(--color-subtext)] text-sm md:text-base`}>
                  {item.date}: {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Esfera Inferior (Fin del Timeline) */}
      <section className="w-full flex justify-center relative mb-48">
        {/* Extensión final de la línea para conectar con la esfera */}
        <div className="absolute w-[2px] bg-[#3e3d3d] h-24 left-[20px] md:left-1/2 -ml-[1px] -top-24 z-0"></div>
        <div className="w-12 h-12 bg-[#DFDFDF] rounded-full z-10 shadow-[0_0_40px_10px_rgba(223,223,223,0.3)]"></div>
      </section>

      {/* 3. Habilidades */}
      <section className="w-full max-w-5xl px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 font-['Protest_Revolution'] tracking-widest text-sm mb-48">
        
        {/* Back */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-[var(--color-text-main)] max-w-max border-b border-[#3e3d3d] pb-2 mb-2">{skills.back.title}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.back.languages.map((lang, i) => <li key={i}>{lang}</li>)}
          </ul>
          <h2 className="text-xl text-[var(--color-text-main)] mt-6">FrameWorks</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.back.frameworks.map((fw, i) => <li key={i}>{fw}</li>)}
          </ul>
        </div>

        {/* Front */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-[var(--color-text-main)] max-w-max border-b border-[#3e3d3d] pb-2 mb-2">{skills.front.title}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.front.languages.map((lang, i) => <li key={i}>{lang}</li>)}
          </ul>
          <h2 className="text-xl text-[var(--color-text-main)] mt-6">FrameWorks</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.front.frameworks.map((fw, i) => <li key={i}>{fw}</li>)}
          </ul>
        </div>

        {/* Otros */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-[var(--color-text-main)] max-w-max border-b border-[#3e3d3d] pb-2 mb-2">{skills.otros.title}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.otros.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

      </section>

      {/* 4. Testimonios */}
      <section className="w-full max-w-3xl px-6 md:px-16 flex flex-col gap-16 mb-48 font-['Protest_Revolution'] tracking-wider">
        <h2 className="text-2xl text-[var(--color-text-main)] border-b border-[#3e3d3d] pb-2 max-w-max mb-4">Testimonios</h2>
        {testimonials.map((testimonio, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className="text-lg text-[var(--color-text-main)]">{testimonio.name}</h3>
            <p className="text-[var(--color-subtext)] opacity-80">{testimonio.text}</p>
          </div>
        ))}
      </section>

      {/* 5. Contactos */}
      <section className="w-full max-w-5xl px-6 md:px-16 flex flex-col font-['Protest_Revolution'] tracking-widest mb-16">
        <h2 className="text-2xl text-[var(--color-text-main)] mb-12 text-left md:text-center">Contactos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 mx-auto w-full max-w-3xl">
          {contacts.map((contact, i) => (
            <div key={i} className="flex flex-col gap-2 text-center md:text-left items-center md:items-start w-full">
              <h3 className="text-base text-[var(--color-text-main)]">{contact.name}</h3>
              <p className="text-sm text-[var(--color-subtext)]">{contact.relation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contactame */}
      <section className="w-full max-w-4xl px-6 md:px-16 flex flex-col font-['Protest_Revolution'] tracking-widest mt-16">
        <h2 className="text-2xl text-[var(--color-text-main)] mb-12 text-center border-b border-[#3e3d3d] pb-4 mx-auto max-w-max w-full">Contactame</h2>
        
        <div className="flex flex-col md:flex-row gap-16 justify-between items-center text-center">
          <p className="w-full md:w-1/2 text-sm md:text-base text-[var(--color-subtext)] leading-loose">
            {contactMessage.text}
          </p>
          
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-[var(--color-subtext)] text-sm md:text-base">
            <p>{contactMessage.email}</p>
            <p>{contactMessage.location}</p>
          </div>
        </div>
      </section>

    </main>
  );
}
