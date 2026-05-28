import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Services from "@/components/sections/Services";
import CTASection from "@/components/sections/CTASection";
import { FadeUp, StaggerChildren } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Lineup — Cinema VS-9, Survey LS-2, Industrial IX-6",
  description:
    "Three flight platforms on one modular carbon-fiber chassis. Cinema, survey, and industrial inspection — built to order.",
};

export const revalidate = 3600;

export default function ServicesPage() {
  const assets = siteConfig.assets.images as Record<string, string>;
  return (
    <>
      <PageHero
        eyebrow="The Lineup · Three Airframes"
        title="Built for the work, not the spec sheet."
        intro="Each AeroVista UAS shares the same modular carbon-fiber chassis. Payload, sensor, and flight stack are picked at order — the drone you fly is the one your mission needs."
        image={assets["section-services-hero"] || ""}
      />

      <Services />

      <section className="section-pad bg-tone-2">
        <div className="container-wide space-y-24">
          {siteConfig.services.map((svc, i) => (
            <article id={svc.slug} key={svc.slug} className="grid md:grid-cols-12 gap-10 items-start">
              <FadeUp className="md:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden border border-[rgba(212,163,90,0.30)] gold-rim">
                  {assets[svc.imageSlot] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={assets[svc.imageSlot]}
                      alt={svc.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ filter: "contrast(1.05) saturate(0.9) brightness(0.72)" }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-bg/65 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.32em] uppercase text-primary">
                    Platform / {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </FadeUp>

              <div className="md:col-span-7 space-y-6">
                <FadeUp>
                  <div className="text-eyebrow mb-3 text-primary">{svc.shortName}</div>
                  <h2 className="text-display text-white font-bold uppercase text-[clamp(36px,5.5vw,72px)] leading-[0.95]">
                    {svc.name}
                  </h2>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <p className="text-lg text-fg/80 leading-relaxed max-w-[58ch]">{svc.longDescription}</p>
                </FadeUp>
                <StaggerChildren staggerDelay={0.06} className="grid sm:grid-cols-2 gap-px bg-[var(--hairline)] border border-[var(--hairline)]">
                  {svc.specs.map((s) => (
                    <div key={s.label} className="bg-tone-3 p-5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary mb-2">
                        {s.label}
                      </div>
                      <div className="text-fg text-base leading-snug">{s.value}</div>
                    </div>
                  ))}
                </StaggerChildren>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
