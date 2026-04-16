"use client";

import { siteData } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Container } from "../shared/Container";
import { SectionHeading } from "../shared/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = siteData.testimonials.items[index];

  const previous = () => setIndex((current) => (current === 0 ? siteData.testimonials.items.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === siteData.testimonials.items.length - 1 ? 0 : current + 1));

  return (
    <section className="px-3 py-12 sm:px-6 sm:py-18">
      <Container className="max-w-[1180px] px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={siteData.testimonials.eyebrow}
            title={siteData.testimonials.title}
            description={siteData.testimonials.description}
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label={siteData.testimonials.previousLabel}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/88 text-navy-900 shadow-float transition duration-300 hover:-translate-y-0.5 hover:shadow-premium"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={siteData.testimonials.nextLabel}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/88 text-navy-900 shadow-float transition duration-300 hover:-translate-y-0.5 hover:shadow-premium"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {siteData.testimonials.items.map((item, itemIndex) => (
              <article
                key={item.name + item.role}
                className={`rounded-[30px] border p-6 shadow-float transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
                  itemIndex === index
                    ? "border-mint-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,250,246,0.96))]"
                    : "border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,251,252,0.9))]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-navy-900">{item.name}</p>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                  <span className="rounded-[18px] border border-mint-200/70 bg-mint-100/92 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">
                    {item.metric}
                  </span>
                </div>
                <div className="mt-5 flex gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-mint-100 to-white shadow-inner">
                    <div className="h-4 w-4 rounded-full bg-navy-900/80" />
                  </div>
                  <div className="flex-1 rounded-[22px] bg-white/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="h-2 w-16 rounded-full bg-[#dbe6ec]" />
                    <p className="mt-3 text-sm leading-7 text-muted">{item.quote}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[radial-gradient(circle_at_top,rgba(66,190,140,0.18),transparent_30%),linear-gradient(180deg,#15315b_0%,#0f2340_100%)] p-7 text-white shadow-[0_30px_80px_rgba(13,31,60,0.25)]">
            <div className="absolute right-[-3rem] top-[-2rem] h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute bottom-8 left-8 h-px w-36 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name + active.role}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-10 w-10 text-mint-400" />
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
                    {siteData.testimonials.storyLabel} {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-8 font-heading text-[2.3rem] font-bold leading-[1.04] tracking-[-0.04em]">"{active.quote}"</p>
                <div className="mt-10 rounded-[28px] border border-white/12 bg-white/7 p-5 backdrop-blur">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {siteData.testimonials.showcaseCards.map((label, labelIndex) => (
                      <div key={label} className="rounded-[22px] bg-white/8 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</p>
                        <div className="mt-4 h-16 rounded-[16px] bg-gradient-to-br from-white/10 to-white/5" />
                        <div className="mt-3 h-2 rounded-full bg-white/10">
                          <div className="h-2 rounded-full bg-mint-400" style={{ width: `${55 + labelIndex * 15}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    { align: "start", width: "68%" },
                    { align: "end", width: "58%" },
                    { align: "start", width: "74%" },
                  ].map((bubble, index) => (
                    <div key={`${bubble.align}-${index}`} className={`flex ${bubble.align === "end" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`rounded-[22px] px-4 py-3 text-sm ${
                          bubble.align === "end" ? "bg-mint-400 text-navy-900" : "bg-white/10 text-white/80"
                        }`}
                        style={{ width: bubble.width }}
                      >
                        <div className={`h-2 rounded-full ${bubble.align === "end" ? "bg-white/50" : "bg-white/20"}`} />
                        <div className={`mt-2 h-2 w-2/3 rounded-full ${bubble.align === "end" ? "bg-white/40" : "bg-white/15"}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <p className="font-semibold">{active.name}</p>
                  <p className="text-sm text-white/65">{active.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
