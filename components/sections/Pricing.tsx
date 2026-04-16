import { siteData } from "@/data/site";
import { Check } from "lucide-react";
import { Container } from "../shared/Container";
import { PrimaryButton } from "../shared/PrimaryButton";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function Pricing() {
  return (
    <section id={siteData.pricing.id} className="scroll-mt-28 px-3 py-12 sm:px-6 sm:py-18">
      <Container className="max-w-[1180px] px-0">
        <SectionHeading eyebrow={siteData.pricing.eyebrow} title={siteData.pricing.title} description={siteData.pricing.description} align="center" />

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {siteData.pricing.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.06}>
              <article
                className={`relative h-full overflow-hidden rounded-[36px] border p-7 shadow-premium transition duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-mint-200/70 bg-[radial-gradient(circle_at_top,rgba(66,190,140,0.18),transparent_30%),linear-gradient(180deg,#15315b_0%,#0f2340_100%)] text-white"
                    : "border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,250,252,0.92))] text-navy-900"
                }`}
              >
                {plan.highlighted ? (
                  <div className="absolute right-[-3rem] top-[-2rem] h-36 w-36 rounded-full border border-white/12" />
                ) : (
                  <div className="absolute right-5 top-5 h-24 w-24 rounded-full bg-mint-100/35 blur-2xl" />
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-sm ${plan.highlighted ? "text-white/60" : "text-muted"}`}>{plan.name}</p>
                    <p className="mt-3 font-heading text-[3.4rem] font-extrabold tracking-[-0.07em]">{plan.price}</p>
                  </div>
                  {plan.badge ? (
                    <span className="rounded-pill border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-mint-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <p className={`mt-5 text-sm leading-7 ${plan.highlighted ? "text-white/70" : "text-muted"}`}>{plan.subtitle}</p>
                <div className={`my-8 h-px ${plan.highlighted ? "bg-white/12" : "bg-line"}`} />
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className={plan.highlighted ? "flex gap-3 rounded-[20px] bg-white/6 p-3" : "flex gap-3 rounded-[20px] bg-soft/80 p-3"}>
                      <span
                        className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${
                          plan.highlighted ? "bg-white/10 text-mint-100" : "bg-mint-100 text-navy-900"
                        }`}
                      >
                        <Check className="h-4 w-4" />
                      </span>
                      <p className={`text-sm leading-7 ${plan.highlighted ? "text-white/80" : "text-muted"}`}>{feature}</p>
                    </div>
                  ))}
                </div>
                <PrimaryButton
                  href={plan.cta.href}
                  variant={plan.highlighted ? "secondary" : "primary"}
                  className={plan.highlighted ? "mt-8 w-full border-white/20 bg-white text-navy-900" : "mt-8 w-full"}
                >
                  {plan.cta.label}
                </PrimaryButton>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
