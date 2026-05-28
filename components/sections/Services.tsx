import ServiceCard from "@/components/ServiceCard";
import { FadeUp, StaggerChildren, CardTiltLayer } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Services() {
  const assets = siteConfig.assets.images as Record<string, string>;

  return (
    <section id="services" className="section-pad bg-tone-1 relative">
      <div className="container-wide">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <FadeUp>
            <div className="text-eyebrow mb-4">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
              Lineup · 3 platforms
            </div>
            <h2 className="text-display text-white font-bold uppercase text-[clamp(32px,5vw,72px)] leading-[0.95] max-w-[14ch]">
              Three airframes. Built to order.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-[36ch] text-fg/70">
              Each platform shares the same carbon-fiber chassis. Sensor, datalink, and battery are picked per mission.
            </p>
          </FadeUp>
        </div>

        <StaggerChildren staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((svc, i) => (
            <CardTiltLayer key={svc.slug}>
              <ServiceCard
                service={svc}
                index={i}
                imageSrc={assets[svc.imageSlot]}
              />
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
