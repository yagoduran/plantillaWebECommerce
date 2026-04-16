import { siteData } from "@/data/site";
import { Container } from "../shared/Container";
import { PrimaryButton } from "../shared/PrimaryButton";
import { Reveal } from "../shared/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-3 pb-14 pt-7 sm:px-6 sm:pb-20 sm:pt-10">
      <Container className="relative max-w-[1180px] px-0">
        <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-hero-grid px-6 py-12 shadow-premium sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-mint-100/65 blur-3xl" />
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full border border-white/50 opacity-70" />
          <div className="absolute right-10 top-14 h-28 w-28 rounded-full border border-white/60 bg-white/32" />
          <div className="absolute bottom-8 right-[18%] h-44 w-44 rounded-full border border-white/40 opacity-40" />
          <div className="absolute bottom-12 left-10 h-20 w-20 rotate-12 rounded-[28px] border border-white/60 bg-mint-100/50" />
          <div className="absolute left-[38%] top-[20%] h-px w-56 -rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <div className="absolute bottom-[28%] right-[12%] h-px w-44 rotate-12 bg-gradient-to-r from-transparent via-[#b7dcca] to-transparent" />

          <div className="relative grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <Reveal className="max-w-[700px]">
              <span className="inline-flex rounded-pill border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,250,248,0.74))] px-4 py-2 text-sm font-semibold text-navy-700 shadow-float backdrop-blur">
                {siteData.brand.eyebrow}
              </span>
              <p className="mt-6 inline-flex rounded-pill border border-mint-200/80 bg-[linear-gradient(180deg,rgba(223,247,234,0.96),rgba(255,255,255,0.88))] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-navy-900 shadow-float">
                {siteData.hero.badge}
              </p>
              <h1 className="mt-7 max-w-[12ch] font-heading text-[3.7rem] font-extrabold leading-[0.92] tracking-[-0.065em] text-navy-900 sm:text-[4.9rem] lg:text-[6.1rem]">
                {siteData.hero.titleStart} <span className="text-mint-500">{siteData.hero.highlight}</span>{" "}
                {siteData.hero.titleEnd}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-[1.1rem]">{siteData.hero.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={siteData.hero.primaryCta.href} className="min-w-[190px]">
                  {siteData.hero.primaryCta.label}
                </PrimaryButton>
                <PrimaryButton href={siteData.hero.secondaryCta.href} variant="secondary" className="min-w-[180px]">
                  {siteData.hero.secondaryCta.label}
                </PrimaryButton>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {siteData.hero.miniStats.map((stat) => (
                  <div key={stat.label} className="rounded-[26px] border border-white/75 bg-white/76 p-5 shadow-float backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                    <p className="text-[1.9rem] font-bold text-navy-900">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative mx-auto max-w-[520px]">
                <div className="absolute -left-8 top-10 hidden rounded-[26px] border border-white/80 bg-white/78 px-4 py-3 shadow-float backdrop-blur lg:flex lg:items-center lg:gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-mint-100 to-white" />
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{siteData.hero.sideBadge.title}</p>
                    <p className="text-xs text-muted">{siteData.hero.sideBadge.description}</p>
                  </div>
                </div>
                <div className="absolute -right-4 top-8 hidden h-28 w-28 rounded-full bg-mint-100/60 blur-2xl lg:block" />
                <div className="relative rounded-[36px] border border-white/78 bg-white/76 p-5 shadow-premium backdrop-blur">
                  <div className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#f8fcfb,#f1f6fb)] p-5">
                    <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-[28px] bg-[linear-gradient(180deg,#15315b_0%,#0f2340_100%)] p-6 text-white shadow-[0_26px_60px_rgba(13,31,60,0.26)]">
                        <p className="text-sm text-white/70">{siteData.hero.featuredPanel.eyebrow}</p>
                        <p className="mt-3 font-heading text-[2rem] font-bold leading-tight">{siteData.hero.featuredPanel.title}</p>
                        <div className="mt-6 h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-mint-400 shadow-[0_0_20px_rgba(66,190,140,0.55)]"
                            style={{ width: siteData.hero.featuredPanel.progress }}
                          />
                        </div>
                      </div>
                      <div className="space-y-4 pt-1">
                        {siteData.hero.floatingCards.map((item, index) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.label}
                              className="rounded-[24px] border border-white/85 bg-white/90 p-4 shadow-float transition duration-300 hover:-translate-y-1 hover:shadow-premium"
                              style={{ transform: `translateY(${index * 8}px)` }}
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-mint-100 to-white text-navy-900 shadow-inner">
                                  <Icon className="h-5 w-5" />
                                </span>
                                <div>
                                  <p className="font-semibold text-navy-900">{item.label}</p>
                                  <p className="text-sm text-muted">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {Array.from({ length: siteData.hero.miniMockCards }).map((_, item) => (
                        <div key={item} className="rounded-[22px] border border-white/90 bg-white/88 p-4 shadow-float transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                          <div className="mb-3 rounded-[18px] bg-gradient-to-br from-mint-100 via-white to-[#eef4ff] p-3">
                            <div className="flex items-end gap-2">
                              {[42, 66, 54].map((height, index) => (
                                <div
                                  key={height + index}
                                  className="flex-1 rounded-t-[10px] bg-gradient-to-t from-navy-900/85 to-mint-400"
                                  style={{ height }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="h-3 w-3/4 rounded-full bg-[#d7e3ea]" />
                          <div className="mt-2 h-3 w-1/2 rounded-full bg-[#e9f0f4]" />
                          <div className="mt-3 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-mint-400" />
                            <div className="h-2 flex-1 rounded-full bg-[#edf3f7]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
