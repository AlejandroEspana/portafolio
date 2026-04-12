import { getInfoData } from "@/data/info";

export default async function InfoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { about, timeline, skills, testimonialsSec, testimonials, contacts, contactMessage, partnersTitle } = getInfoData(lang);

  return (
    <main className="w-full flex flex-col items-center pt-24 pb-32 animate-in fade-in duration-500 overflow-x-hidden">

      {/* 1. Sobre Mi & Inicio del Timeline */}
      <section className="w-full max-w-4xl px-6 md:px-16 flex flex-col relative">
        <h1 className="text-3xl md:text-4xl text-[var(--color-text-main)] font-['Protest_Revolution'] tracking-widest mb-6">{about.title}</h1>

        <div className="flex flex-col gap-6 text-[var(--color-subtext)] text-sm md:text-base leading-relaxed font-['Protest_Revolution'] tracking-wider mb-24">
          <p>{about.p1}</p>
          <p>{about.p2}</p>
        </div>

        {/* Esfera Superior */}
        <div className="w-full flex md:justify-center relative h-16 mt-8">
          <div className="w-12 h-12 bg-[var(--color-accent-sphere)] rounded-full z-10 sphere-glow translate-y-10 max-md:mr-auto"></div>
          <div className="absolute w-[2px] bg-[var(--color-border-main)] h-full max-md:left-[24px] md:left-1/2 -ml-[1px] top-16 z-0"></div>
        </div>
      </section>

      {/* 2. Timeline Core */}
      <section className="w-full max-w-5xl px-6 md:px-16 flex flex-col items-center relative py-12">
        <div className="absolute w-[2px] bg-[var(--color-border-main)] h-full max-md:left-[48px] md:left-1/2 -ml-[1px] top-0 z-0"></div>

        <div className="w-full flex flex-col gap-16 md:gap-32 my-12">
          {timeline.map((item, index) => {
            const isLeft = item.side === "left";
            return (
              <div
                key={index}
                className={`relative w-full flex ${isLeft ? "md:justify-start" : "md:justify-end"} items-center`}
              >
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-accent-sphere)] z-10 ${isLeft ? "right-[calc(50%+1.5rem)]" : "left-[calc(50%+1.5rem)]"}`}></div>
                <div className="md:hidden absolute left-[16px] w-4 h-4 rounded-full bg-[var(--color-accent-sphere)] z-10 top-1/2 -translate-y-1/2"></div>

                <div className={`w-[calc(100%-48px)] md:w-[calc(50%-4rem)] ml-[48px] md:ml-0 font-['Protest_Revolution'] tracking-wider leading-relaxed text-[var(--color-subtext)] text-sm md:text-base ${isLeft ? "md:pr-0 md:text-left text-left" : "md:pl-0 text-left"}`}>
                  <span dangerouslySetInnerHTML={{ __html: item.date }}></span>: {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Esfera Inferior */}
      <section className="w-full flex md:justify-center relative mb-48 px-6 md:px-16 max-w-5xl">
        <div className="absolute w-[2px] bg-[var(--color-border-main)] h-24 max-md:left-[48px] md:left-1/2 -ml-[1px] -top-24 z-0"></div>
        <div className="w-12 h-12 bg-[var(--color-accent-sphere)] rounded-full z-10 sphere-glow max-md:mr-auto"></div>
      </section>

      {/* 3. Habilidades */}
      <section className="w-full max-w-6xl px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-['Protest_Revolution'] tracking-widest text-sm mb-48">
        
        {/* Back */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-[var(--color-text-main)] max-w-max border-b border-[var(--color-border-main)] pb-2 mb-2">{skills.back.title}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.back.languages.map((langItem, i) => <li key={i}>{langItem}</li>)}
          </ul>
          <h2 className="text-xl text-[var(--color-text-main)] mt-6">{lang === 'es' ? 'FrameWorks' : 'Frameworks'}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.back.frameworks.map((fw, i) => <li key={i}>{fw}</li>)}
          </ul>
        </div>

        {/* Front */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-[var(--color-text-main)] max-w-max border-b border-[var(--color-border-main)] pb-2 mb-2">{skills.front.title}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.front.languages.map((langItem, i) => <li key={i}>{langItem}</li>)}
          </ul>
          <h2 className="text-xl text-[var(--color-text-main)] mt-6">{lang === 'es' ? 'FrameWorks' : 'Frameworks'}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)]">
            {skills.front.frameworks.map((fw, i) => <li key={i}>{fw}</li>)}
          </ul>
        </div>

        {/* Otros */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-[var(--color-text-main)] max-w-max border-b border-[var(--color-border-main)] pb-2 mb-2">{skills.otros.title}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)] break-words">
            {skills.otros.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Blandas */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-[var(--color-text-main)] max-w-max border-b border-[var(--color-border-main)] pb-2 mb-2">{skills.habilidadesBlandas.title}</h2>
          <ul className="flex flex-col gap-4 text-[var(--color-subtext)] break-words">
            {skills.habilidadesBlandas.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* 4. Testimonios */}
      <section className="w-full max-w-3xl px-6 md:px-16 flex flex-col gap-16 mb-48 font-['Protest_Revolution'] tracking-wider">
        <h2 className="text-2xl text-[var(--color-text-main)] border-b border-[var(--color-border-main)] pb-2 max-w-max mb-4">{testimonialsSec.title}</h2>
        {testimonials.map((testimonio, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className="text-lg text-[var(--color-text-main)]">{testimonio.name}</h3>
            <p className="text-[var(--color-subtext)] opacity-80">{testimonio.text}</p>
          </div>
        ))}
      </section>

      {/* 5. Contactame */}
      <section className="w-full max-w-4xl px-6 md:px-16 flex flex-col font-['Protest_Revolution'] tracking-widest mb-16">
        <h2 className="text-2xl text-[var(--color-text-main)] mb-12 text-center border-b border-[var(--color-border-main)] pb-4 mx-auto max-w-max w-full">{contactMessage.title}</h2>

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

      {/* 6. Partners */}
      <section className="w-full max-w-5xl px-6 md:px-16 flex flex-col font-['Protest_Revolution'] tracking-widest mt-16">
        <h2 className="text-2xl text-[var(--color-text-main)] mb-12 text-left md:text-center">{partnersTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 mx-auto w-full max-w-3xl">
          {contacts.map((contact, i) => (
            <div key={i} className="flex flex-col gap-2 text-center md:text-left items-center md:items-start w-full">
              <h3 className="text-base text-[var(--color-text-main)]">{contact.name}</h3>
              <p className="text-sm text-[var(--color-subtext)]">{contact.relation}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
