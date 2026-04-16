import { siteData } from "@/data/site";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function LearnGrid() {
  return (
    <section id="que-aprenderas" className="scroll-mt-28 px-3 py-10 sm:px-6 sm:py-16">
      <Container className="max-w-6xl px-0">
        <SectionHeading
          eyebrow={siteData.learnSection.eyebrow}
          title={siteData.learnSection.title}
          description={siteData.learnSection.description}
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteData.learnSection.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group h-full rounded-[30px] border border-white/70 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(12,29,58,0.14)]">
                  <div className={`rounded-[26px] bg-gradient-to-br ${item.accent} p-4`}>
                    <div className="rounded-[22px] bg-white/80 p-4">
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">{item.label}</span>
                      </div>
                      <div className="mt-6 h-32 rounded-[22px] bg-gradient-to-br from-white via-[#f5faf8] to-[#eaf2ff] shadow-inner" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold tracking-[-0.03em] text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
