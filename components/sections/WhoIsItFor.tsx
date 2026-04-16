import { siteData } from "@/data/site";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../shared/Container";
import { PrimaryButton } from "../shared/PrimaryButton";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function WhoIsItFor() {
  return (
    <section id={siteData.whoIsItFor.id} className="scroll-mt-28 px-3 py-10 sm:px-6 sm:py-16">
      <Container className="max-w-6xl px-0">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white p-5 shadow-soft">
              <div className="rounded-[28px] bg-gradient-to-br from-[#eff9f5] via-white to-[#eef3ff] p-6">
                <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/80 bg-[radial-gradient(circle_at_top,rgba(137,234,196,0.45),transparent_22%),linear-gradient(180deg,#f9fcfb,#ecf4f8)]">
                  <div className="absolute left-1/2 top-16 h-44 w-44 -translate-x-1/2 rounded-full bg-mint-100/80 blur-2xl" />
                  <div className="absolute right-[-2rem] top-10 h-40 w-40 rounded-full border border-white/40 opacity-50" />
                  <div className="absolute left-10 top-10 h-px w-28 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  <div className="absolute left-1/2 top-[82px] h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,rgba(255,255,255,0.18)_36%,transparent_37%),linear-gradient(180deg,#15315b_0%,#0f2340_100%)] shadow-[0_24px_70px_rgba(13,31,60,0.18)]" />
                  <div className="absolute left-1/2 top-[210px] h-36 w-[220px] -translate-x-1/2 rounded-[38px] bg-[linear-gradient(180deg,rgba(21,49,91,0.96),rgba(15,35,64,0.92))]" />
                  <div className="absolute left-[50%] top-[122px] h-20 w-20 -translate-x-1/2 rounded-full bg-[#ffd9c6]" />
                  <div className="absolute left-[54%] top-[140px] h-8 w-20 -translate-x-1/2 rounded-full bg-white/15" />
                  <div className="absolute left-[22%] top-[36%] rounded-[20px] border border-white/80 bg-white/82 p-3 shadow-float backdrop-blur">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-mint-100 to-white" />
                      <div>
                        <div className="h-2 w-14 rounded-full bg-[#d8e5ec]" />
                        <div className="mt-2 h-2 w-10 rounded-full bg-[#ecf2f6]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-[12%] top-[42%] rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,251,249,0.88))] p-4 shadow-float">
                    <div className="flex items-end gap-2">
                      {[32, 48, 62].map((height, index) => (
                        <div key={height + index} className="w-4 rounded-t-[8px] bg-gradient-to-t from-navy-900 to-mint-400" style={{ height }} />
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-8 rounded-[22px] border border-white/80 bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
                    <p className="text-sm font-semibold text-navy-900">{siteData.whoIsItFor.visualCard.title}</p>
                    <p className="mt-1 text-xs text-muted">{siteData.whoIsItFor.visualCard.description}</p>
                  </div>
                  <div className="absolute right-8 top-8 rounded-[20px] bg-white/85 px-4 py-3 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted">{siteData.whoIsItFor.visualCard.badgeEyebrow}</p>
                    <p className="mt-1 font-semibold text-navy-900">{siteData.whoIsItFor.visualCard.badgeTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading eyebrow={siteData.whoIsItFor.eyebrow} title={siteData.whoIsItFor.title} />
            <div className="mt-6 space-y-4 text-base leading-8 text-muted">
              {siteData.whoIsItFor.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              {siteData.whoIsItFor.points.map((point) => (
                <div key={point} className="flex gap-3 rounded-[22px] border border-white/70 bg-white p-4 shadow-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-mint-400" />
                  <p className="text-sm leading-7 text-muted">{point}</p>
                </div>
              ))}
            </div>
            <PrimaryButton href={siteData.whoIsItFor.cta.href} className="mt-8">
              {siteData.whoIsItFor.cta.label}
            </PrimaryButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
