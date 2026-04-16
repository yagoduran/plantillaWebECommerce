import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function PrimaryButton({
  href,
  children,
  variant = "primary",
  className,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-pill px-6 py-3.5 text-sm font-semibold transition duration-300",
        variant === "primary"
          ? "border border-navy-900/80 bg-[linear-gradient(180deg,#15315b_0%,#0f2340_100%)] text-white shadow-premium hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(13,31,60,0.18)]"
          : "border border-white/80 bg-white/88 text-navy-900 shadow-float backdrop-blur hover:-translate-y-0.5 hover:border-mint-200 hover:bg-white",
        className,
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-[1px] rounded-pill opacity-100 transition duration-300",
          variant === "primary"
            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))] group-hover:opacity-80"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.35))]",
        )}
      />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
