import { siteData } from "@/data/site";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function ResultsShowcase() {
  return (
    <section className="px-3 py-12 sm:px-6 sm:py-18">
      <Container className="max-w-[1180px] px-0">
        <div className="rounded-[38px] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,245,241,0.88))] p-6 shadow-premium sm:p-8 lg:p-10">
          <SectionHeading eyebrow={siteData.results.eyebrow} title={siteData.results.title} description={siteData.results.description} />

          <div className="mt-12 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="relative min-h-[400px] overflow-hidden rounded-[34px] border border-white/12 bg-[radial-gradient(circle_at_top,rgba(66,190,140,0.18),transparent_26%),linear-gradient(180deg,#15315b_0%,#0f2340_100%)] p-7 text-white shadow-[0_30px_80px_rgba(13,31,60,0.24)]">
                <div className="absolute -right-14 top-8 h-40 w-40 rounded-full border border-white/12" />
                <div className="absolute left-16 top-24 h-px w-44 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute left-6 top-6 flex gap-2">
                  {siteData.results.panel.windowDots.map((color) => (
                    <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[26px] bg-white/8 p-5 backdrop-blur">
                    <p className="text-sm text-white/65">{siteData.results.panel.headlineLabel}</p>
                    <p className="mt-3 font-heading text-5xl font-bold tracking-[-0.05em]">{siteData.results.panel.headlineValue}</p>
                    <div className="mt-6 grid gap-3">
                      {siteData.results.panel.indicators.map((value, index) => (
                        <div key={value + index}>
                          <div className="mb-2 flex justify-between text-xs text-white/60">
                            <span>{siteData.results.panel.indicatorPrefix} {index + 1}</span>
                            <span>{value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/10">
                            <div className="h-2 rounded-full bg-mint-400" style={{ width: `${value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[["Foco", "72%"], ["Crecimiento", "+18%"]].map(([label, value]) => (
                        <div key={label} className="rounded-[18px] border border-white/10 bg-white/8 p-3">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">{label}</p>
                          <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur">
                    <div className="flex items-end gap-3">
                      {siteData.results.panel.chartBars.map((height, index) => (
                        <div key={height + index} className="flex-1 rounded-t-[14px] bg-gradient-to-t from-mint-400 to-white/80" style={{ height }} />
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {Array.from({ length: siteData.results.panel.miniCards }).map((_, item) => (
                        <div key={item} className="rounded-[18px] bg-white/10 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                          <div className="h-3 w-2/3 rounded-full bg-white/20" />
                          <div className="mt-3 h-10 rounded-[16px] bg-white/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-6">
              {siteData.results.cards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.05}>
                  <article className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,250,252,0.92))] p-6 shadow-float transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted">{card.subtitle}</p>
                        <h3 className="mt-1 font-heading text-2xl font-bold text-navy-900">{card.title}</h3>
                      </div>
                      <span className="rounded-[18px] border border-mint-200/70 bg-mint-100/90 px-4 py-2 text-lg font-bold text-navy-900 shadow-inner">{card.value}</span>
                    </div>
                    <div className="mt-6 flex items-end gap-3">
                      {card.bars.map((bar, barIndex) => (
                        <div
                          key={bar + barIndex}
                          className="flex-1 rounded-t-[18px] bg-gradient-to-t from-navy-900 via-navy-700 to-mint-400"
                          style={{ height: `${bar * 1.2}px` }}
                        />
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="rounded-[16px] bg-[#f3f8f8] p-3">
                          <div className="h-2 w-2/3 rounded-full bg-[#dbe6ec]" />
                          <div className="mt-3 h-8 rounded-[12px] bg-white shadow-inner" />
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
