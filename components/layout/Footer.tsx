import Link from "next/link";
import { siteData } from "@/data/site";
import { Container } from "../shared/Container";

export function Footer() {
  return (
    <footer className="mt-8 bg-footer-glow px-3 pb-8 pt-14 sm:px-6">
      <Container className="max-w-6xl rounded-[34px] border border-white/70 bg-white/70 px-6 py-10 shadow-soft backdrop-blur sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-[24px] bg-navy-900 font-heading text-xl font-bold text-white shadow-glow">
              {siteData.brand.mark}
            </span>
            <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-[-0.05em] text-navy-900">
              {siteData.brand.name}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-muted">{siteData.footer.copy}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">{siteData.footer.legalTitle}</p>
              <div className="mt-4 flex flex-col gap-3">
                {siteData.footer.legal.map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm text-navy-900 transition hover:text-mint-400">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">{siteData.footer.navTitle}</p>
              <div className="mt-4 flex flex-col gap-3">
                {siteData.nav.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-navy-900 transition hover:text-mint-400">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © {new Date().getFullYear()} {siteData.brand.name}. {siteData.footer.copyright}
        </div>
      </Container>
    </footer>
  );
}
