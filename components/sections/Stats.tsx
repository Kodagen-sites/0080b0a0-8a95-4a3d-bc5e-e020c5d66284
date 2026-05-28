import { FadeUp, NumberCounter, StaggerChildren } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Stats() {
  return (
    <section className="section-pad bg-tone-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(212,163,90,0.45),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(to_right,transparent,rgba(212,163,90,0.45),transparent)]" />

      <div className="container-wide">
        <FadeUp>
          <div className="text-eyebrow mb-12 text-center">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
            {siteConfig.stats.eyebrow}
            <span className="ml-3 inline-block h-px w-10 align-middle bg-primary/70" />
          </div>
        </FadeUp>

        <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {siteConfig.stats.items.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="font-display text-[clamp(72px,12vw,160px)] font-bold leading-none text-primary tabular-nums">
                {"prefix" in stat ? stat.prefix : ""}
                <NumberCounter to={stat.value} duration={1.8} />
                {stat.suffix ?? ""}
              </div>
              <div className="mt-4 text-eyebrow text-contrast/80">{stat.label}</div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
