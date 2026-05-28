"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { siteConfig } from "@/content/site-config";
import framesManifest from "@/content/frames-manifest.json";
import assetManifest from "@/content/asset-manifest.json";
import ScrollHint from "@/components/motion/ScrollHint";
import MagneticButton from "@/components/motion/MagneticButton";

const ScrollCanvas = dynamic(() => import("@/components/ScrollCanvas"), { ssr: false });

/**
 * Hero — Archetype G · scrub-assemble · HO5 (big-stack right-half subject).
 * H1 owns top-left; drone media occupies right two-thirds of frame.
 * Entry: E3 two-tone fade. Body: gold-accent rule + ghost CTA.
 *
 * When ScrollCanvas frames are not yet available (frameCount === 0),
 * falls back to the scene-1-end still image (assembled drone) so the
 * hero ships visually complete even before video gen finishes.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const frameCount = framesManifest.frameCount ?? 0;
  const heroImage =
    assetManifest.images["scene-1-end"] ||
    assetManifest.images["scene-1-start"] ||
    assetManifest.images["og-image"] ||
    "";

  const eF = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 14, filter: "blur(8px)" },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const overlay = (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Top-left H1 stack — HO5 */}
      <div className="absolute top-0 left-0 right-0 md:right-1/2 px-6 md:px-12 lg:px-20 pt-28 md:pt-36 lg:pt-44 pointer-events-auto">
        <motion.div {...eF(0.05)} className="text-eyebrow mb-6">
          <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
          {siteConfig.hero.eyebrow}
        </motion.div>

        <h1 className="text-display text-white font-bold uppercase tracking-[-0.02em] leading-[0.92] text-[clamp(54px,9.5vw,148px)]">
          {siteConfig.hero.h1Lines.map((line, i) => (
            <motion.span key={i} {...eF(0.12 + i * 0.09)} className="block">
              {i === siteConfig.hero.h1Lines.length - 1 ? (
                <span className="text-primary">{line}</span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          {...eF(0.45)}
          className="mt-10 max-w-[34ch] text-base md:text-lg leading-relaxed text-fg/80"
        >
          {siteConfig.hero.subhead}
        </motion.p>

        <motion.div {...eF(0.6)} className="mt-10 flex items-center gap-4 flex-wrap">
          <MagneticButton as="a" href={siteConfig.hero.primaryCta.href} className="btn-gold">
            {siteConfig.hero.primaryCta.label} →
          </MagneticButton>
          <Link href={siteConfig.hero.secondaryCta.href} className="btn-ghost">
            {siteConfig.hero.secondaryCta.label}
          </Link>
        </motion.div>
      </div>

      {/* Bottom strip — scroll hint left, manifest mark right */}
      <div className="absolute bottom-8 inset-x-0 px-6 md:px-12 lg:px-20 flex items-end justify-between text-[10px] font-mono tracking-[0.32em] uppercase text-fg/55 pointer-events-auto">
        <ScrollHint label={siteConfig.hero.scrollHint} />
        <div className="hidden md:flex flex-col items-end gap-1 text-right">
          <span>Carbon-fiber UAS</span>
          <span className="text-primary/70">Munich · Built to order</span>
        </div>
      </div>
    </div>
  );

  // Live scroll-scrubbed assembly (post gen:videos + gen:frames)
  if (frameCount > 0) {
    return (
      <ScrollCanvas
        frameCount={frameCount}
        pattern={framesManifest.frameUrlTemplate}
        padLength={4}
        scrollDistance={3}
        loadingLabel="Assembling"
        loadingVariant="L1"
      >
        {overlay}
      </ScrollCanvas>
    );
  }

  // Pre-video fallback — still image hero (assembled drone)
  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg">
      {heroImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "contrast(1.06) saturate(0.9) brightness(0.78)" }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#14110a] to-[#1F1F1F]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent" />
      {overlay}
    </section>
  );
}
