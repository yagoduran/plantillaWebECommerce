import { siteData } from "@/data/site";
import { BadgeCheck } from "lucide-react";
import { Container } from "../shared/Container";
import { PrimaryButton } from "../shared/PrimaryButton";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function TrustSection() {
  return (
    <section className="px-3 py-10 sm:px-6 sm:py-16">
      <Container className="max-w-6xl px-0">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow={siteData.trust.eyebrow} title={siteData.trust.title} />
            <div className="mt-8 space-y-4">
              {siteData.trust.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 rounded-[24px] border border-white/70 bg-white p-4 shadow-soft">
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-mint-400" />
                  <p className="text-sm leading-7 text-muted">{bullet}</p>
                </div>
              ))}
            </div>
            <PrimaryButton href={siteData.trust.cta.href} className="mt-8">
              {siteData.trust.cta.label}
            </PrimaryButton>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[34px] border border-white/70 bg-white p-5 shadow-soft">
              <div className="rounded-[28px] bg-gradient-to-br from-[#f3faf7] to-[#eef3ff] p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {Array.from({ length: siteData.trust.visualCardCount }).map((_, item) => (
                    <div key={item} className="rounded-[22px] bg-white p-4 shadow-soft">
                      <div className="flex items-center justify-between">
                        <div className="h-11 w-11 rounded-2xl bg-mint-100" />
                        <div className="h-3 w-14 rounded-full bg-[#dfe8ee]" />
                      </div>
                      <div className="mt-5 h-24 rounded-[20px] bg-gradient-to-br from-[#f7fbf9] to-[#eef4ff]" />
                      <div className="mt-4 h-3 w-2/3 rounded-full bg-[#dce8ef]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
