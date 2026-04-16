"use client";

import { siteData } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "../shared/Container";
import { PrimaryButton } from "../shared/PrimaryButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 px-3 pt-4 sm:px-6 sm:pt-5">
      <Container className="max-w-[1180px] px-0">
        <div
          className={cn(
            "mx-auto max-w-[980px] rounded-[999px] border border-white/80 bg-white/68 px-4 py-2.5 shadow-premium backdrop-blur-2xl transition duration-300 sm:px-5",
            isScrolled
              ? "border-white/90 bg-white/88 shadow-[0_18px_60px_rgba(13,31,60,0.14)]"
              : "shadow-[0_14px_44px_rgba(13,31,60,0.08)]",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <Link href="#" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#15315b_0%,#0f2340_100%)] text-sm font-bold text-white shadow-premium">
                {siteData.brand.mark}
              </span>
              <div className="hidden sm:block">
                <p className="font-heading text-sm font-bold text-navy-900">{siteData.brand.name}</p>
                <p className="text-xs text-muted">{siteData.navbar.supportingText}</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-white/80 bg-white/68 px-2 py-1 shadow-float lg:flex">
              {siteData.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted transition duration-300 hover:bg-soft hover:text-navy-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <PrimaryButton href={siteData.navbar.cta.href} className="px-6 py-3">
                {siteData.navbar.cta.label}
              </PrimaryButton>
            </div>

            <button
              type="button"
              aria-label={isOpen ? siteData.navbar.mobileToggleLabelClose : siteData.navbar.mobileToggleLabelOpen}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-white/90 text-navy-900 shadow-float lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 space-y-2 border-t border-white/80 pt-4">
                  {siteData.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-[22px] border border-transparent bg-white/55 px-4 py-3 text-sm font-medium text-navy-900 transition duration-300 hover:border-white hover:bg-soft"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <PrimaryButton href={siteData.navbar.cta.href} className="mt-2 w-full">
                    {siteData.navbar.cta.label}
                  </PrimaryButton>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}
