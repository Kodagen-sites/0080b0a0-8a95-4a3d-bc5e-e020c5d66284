import type { ReactNode } from "react";

/**
 * PageHero — full-bleed image hero band for inner pages. Noir & Gold theme.
 * Server Component — no client hooks, no event handlers.
 */
type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  image: string;
  intro?: string;
};

export default function PageHero({ eyebrow, title, image, intro }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-bg md:min-h-[64vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "contrast(1.05) saturate(0.85) brightness(0.62)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/30" />
      <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(to_bottom,transparent,rgba(212,163,90,0.35),transparent)]" />

      <div className="relative w-full px-5 pb-14 pt-44 md:px-10 md:pb-20 md:pt-48 container-wide">
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.32em] text-primary">
          <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
          {eyebrow}
        </div>
        <h1 className="max-w-[18ch] font-display text-[clamp(40px,7vw,96px)] font-bold uppercase leading-[1.0] tracking-[-0.02em] text-white">
          {title}
        </h1>
        {intro ? (
          <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-fg/80">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
