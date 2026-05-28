import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";
import { siteConfig } from "@/content/site-config";
import Link from "next/link";

export default function CTASection() {
  const bg = siteConfig.assets.images["section-cta"];

  return (
    <section className="relative section-pad overflow-hidden bg-tone-1">
      {bg && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "contrast(1.1) saturate(0.7) brightness(0.42)" }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/82 to-bg/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(212,163,90,0.15),transparent_60%)]" />

      <div className="relative container-wide grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <FadeUp>
            <div className="text-eyebrow mb-6">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
              {siteConfig.cta.eyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-display text-white font-bold uppercase text-[clamp(38px,6vw,92px)] leading-[0.95] max-w-[18ch]">
              {siteConfig.cta.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-[52ch] text-lg text-fg/80 leading-relaxed">
              {siteConfig.cta.body}
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.3} className="md:col-span-4 flex md:flex-col items-end md:items-end gap-4">
          <MagneticButton as="a" href={siteConfig.cta.primary.href} className="btn-gold">
            {siteConfig.cta.primary.label} →
          </MagneticButton>
          <Link href={siteConfig.cta.secondary.href} className="btn-ghost">
            {siteConfig.cta.secondary.label}
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
