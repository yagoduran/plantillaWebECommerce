import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <span className="mb-5 inline-flex rounded-pill border border-white/75 bg-white/82 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy-700 shadow-float backdrop-blur">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-[2.5rem] font-extrabold leading-[0.98] tracking-[-0.05em] text-navy-900 sm:text-[3.35rem]">
        {title}
      </h2>
      {description ? <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
