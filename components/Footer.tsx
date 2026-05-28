import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

/**
 * Footer — FT3 Giant Wordmark Aurora.
 * Top: aurora-glow gradient backdrop. Middle: brand statement + columns + socials.
 * Below: oversized wordmark in display font. Bottom: copyright + legal links.
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-tone-1 border-t border-[rgba(212,163,90,0.18)]">
      {/* Aurora */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(212,163,90,0.22) 0%, transparent 60%), radial-gradient(40% 30% at 20% 90%, rgba(232,216,172,0.10) 0%, transparent 65%), radial-gradient(40% 30% at 80% 90%, rgba(212,163,90,0.10) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(212,163,90,0.55),transparent)]" />

      <div className="relative section-pad container-wide">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          {/* Brand statement */}
          <div className="md:col-span-6 space-y-6">
            <div className="text-eyebrow">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
              {siteConfig.company.legalName}
            </div>
            <p className="text-xl md:text-2xl font-display uppercase tracking-tight text-contrast leading-[1.15] max-w-[28ch]">
              {siteConfig.footer.brandStatement}
            </p>
            <div className="pt-4">
              <SocialLinks socials={siteConfig.socials} />
            </div>
          </div>

          {/* Columns */}
          {siteConfig.footer.columns.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary mb-5">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-fg/75 hover:text-contrast transition-colors text-sm"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant wordmark */}
        <div className="select-none mb-16">
          <div
            className="font-display font-bold uppercase leading-[0.85] text-center"
            style={{
              fontSize: "clamp(64px, 22vw, 360px)",
              letterSpacing: "-0.04em",
              background: "linear-gradient(180deg, rgba(212,163,90,0.95) 0%, rgba(212,163,90,0.25) 80%, transparent 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {siteConfig.footer.wordmark}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[var(--hairline)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.22em] text-fg/55">
          <div>© {new Date().getFullYear()} {siteConfig.company.legalName}. All rights reserved.</div>
          <ul className="flex items-center gap-6">
            {siteConfig.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
