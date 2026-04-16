import { siteData } from "@/data/site";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../shared/Container";
import { PrimaryButton } from "../shared/PrimaryButton";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function OfferBenefits() {
  return (
    <section className="px-3 py-10 sm:px-6 sm:py-16">
      <Container className="max-w-6xl px-0">
        <div className="grid gap-8 rounded-[34px] border border-white/70 bg-white p-6 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <Reveal>
            <div className="rounded-[30px] bg-gradient-to-br from-navy-900 via-navy-700 to-[#1d8f72] p-6 text-white">
              <div className="rounded-[26px] border border-white/12 bg-white/8 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">{siteData.offer.visual.eyebrow}</p>
                <h3 className="mt-3 font-heading text-3xl font-bold leading-tight">{siteData.offer.visual.title}</h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {Array.from({ length: siteData.offer.visual.cardCount }).map((_, item) => (
                    <div key={item} className="rounded-[20px] bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <div className="rounded-[16px] bg-white/10 p-3">
                        <div className="flex items-end gap-2">
                          {[24, 40, 30, 52].map((height, index) => (
                            <div
                              key={height + index}
                              className="flex-1 rounded-t-[8px] bg-gradient-to-t from-white to-mint-100"
                              style={{ height }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 h-3 w-2/3 rounded-full bg-white/20" />
                      <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[22px] border border-white/12 bg-white/8 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12">
                      <div className="h-4 w-4 rounded-full bg-mint-100" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-1/3 rounded-full bg-white/20" />
                      <div className="mt-2 h-3 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading eyebrow={siteData.offer.eyebrow} title={siteData.offer.title} description={siteData.offer.description} />
            <div className="mt-8 space-y-4">
              {siteData.offer.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-[22px] border border-line bg-soft p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-mint-400" />
                  <p className="text-sm leading-7 text-muted">{benefit}</p>
                </div>
              ))}
            </div>
            <PrimaryButton href={siteData.offer.cta.href} className="mt-8">
              {siteData.offer.cta.label}
            </PrimaryButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
