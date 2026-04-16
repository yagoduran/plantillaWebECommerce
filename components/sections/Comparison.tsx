import { siteData } from "@/data/site";
import { CheckCircle2, XCircle } from "lucide-react";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function Comparison() {
  return (
    <section className="px-3 py-10 sm:px-6 sm:py-16">
      <Container className="max-w-6xl px-0">
        <SectionHeading eyebrow={siteData.comparison.eyebrow} title={siteData.comparison.title} description={siteData.comparison.description} align="center" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-[32px] border border-white/70 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-100 text-navy-900">
                  <CheckCircle2 className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-3xl font-bold tracking-[-0.03em] text-navy-900">{siteData.comparison.positive.title}</h3>
              </div>
              <div className="mt-8 space-y-4">
                {siteData.comparison.positive.items.map((item) => (
                  <div key={item} className="flex gap-3 rounded-[22px] bg-soft p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-mint-400" />
                    <p className="text-sm leading-7 text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-[32px] border border-[#dbe3e8] bg-[#f6f8fb] p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy-900">
                  <XCircle className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-3xl font-bold tracking-[-0.03em] text-navy-900">{siteData.comparison.negative.title}</h3>
              </div>
              <div className="mt-8 space-y-4">
                {siteData.comparison.negative.items.map((item) => (
                  <div key={item} className="flex gap-3 rounded-[22px] bg-white p-4">
                    <XCircle className="mt-0.5 h-5 w-5 flex-none text-navy-700" />
                    <p className="text-sm leading-7 text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
