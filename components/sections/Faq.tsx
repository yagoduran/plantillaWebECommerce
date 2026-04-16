"use client";

import { siteData } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Container } from "../shared/Container";
import { SectionHeading } from "../shared/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={siteData.faq.id} className="scroll-mt-28 px-3 py-12 sm:px-6 sm:py-18">
      <Container className="max-w-5xl px-0">
        <SectionHeading
          eyebrow={siteData.faq.eyebrow}
          title={siteData.faq.title}
          description={siteData.faq.description}
          align="center"
        />
        <div className="mt-10 space-y-4">
          {siteData.faq.items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article
                key={item.question}
                className={`rounded-[28px] border p-2 shadow-float transition duration-300 ${isOpen ? "border-mint-200/80 bg-white shadow-premium" : "border-white/78 bg-white/92 hover:-translate-y-0.5 hover:shadow-premium"}`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 rounded-[24px] px-5 py-5 text-left"
                  >
                    <span className="font-heading text-xl font-bold tracking-[-0.03em] text-navy-900">{item.question}</span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/85 shadow-float transition duration-300 ${isOpen ? "rotate-180 bg-mint-100" : "bg-white"}`}>
                      <ChevronDown className="h-5 w-5 text-navy-900" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0, y: -6 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -6 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm leading-8 text-muted">{item.answer}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
