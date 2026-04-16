import { siteData } from "@/data/site";
import { Play } from "lucide-react";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function VideoShowcase() {
  return (
    <section className="px-3 py-10 sm:px-6 sm:py-14">
      <Container className="max-w-6xl px-0">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow={siteData.videoShowcase.eyebrow}
              title={siteData.videoShowcase.title}
              description={siteData.videoShowcase.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {siteData.videoShowcase.chips.map((chip) => (
                <span key={chip} className="rounded-pill border border-line bg-white px-4 py-2 text-sm font-medium text-muted shadow-soft">
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-5 shadow-soft">
              <div className="rounded-[28px] border border-line bg-gradient-to-br from-[#f4faf7] to-[#eef3ff] p-4">
                <div className="rounded-[24px] bg-navy-900 p-4">
                  <div className="flex items-center gap-2">
                    {siteData.videoShowcase.windowDots.map((color) => (
                      <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="relative mt-4 overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(137,234,196,0.45),transparent_30%),linear-gradient(160deg,#0d1f3c,#18395f_70%,#0d1f3c)] px-6 py-14 sm:px-10 sm:py-16">
                  <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-white/20" />
                  <div className="absolute bottom-10 right-10 h-24 w-24 rotate-12 rounded-[28px] bg-white/10" />
                  <button
                    type="button"
                    aria-label={siteData.videoShowcase.ariaLabel}
                    className="group relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:scale-105 hover:bg-white/15"
                  >
                    <span className="absolute inset-0 animate-ping rounded-full border border-white/20" />
                    <Play className="relative h-8 w-8 fill-current" />
                  </button>
                  <div className="mx-auto mt-10 max-w-md rounded-[24px] border border-white/15 bg-white/10 p-5 text-white/90 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/60">{siteData.videoShowcase.demoEyebrow}</p>
                    <p className="mt-2 font-heading text-2xl font-bold">{siteData.videoShowcase.demoTitle}</p>
                    <div className="mt-5 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-mint-400" style={{ width: siteData.videoShowcase.progress }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
