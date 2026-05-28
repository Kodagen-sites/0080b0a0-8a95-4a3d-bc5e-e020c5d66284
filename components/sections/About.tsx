import FadeUp from "@/components/motion/FadeUp";
import { siteConfig } from "@/content/site-config";

export default function About() {
  return (
    <section id="about" className="section-pad bg-tone-3 relative">
      <div className="container-wide grid md:grid-cols-2 gap-14 items-start">
        <div>
          <FadeUp>
            <div className="text-eyebrow mb-6">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
              {siteConfig.about.eyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-display text-white font-bold uppercase text-[clamp(30px,4.4vw,60px)] leading-[1.0]">
              {siteConfig.about.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg text-fg/75 leading-relaxed max-w-[56ch]">
              {siteConfig.about.body}
            </p>
          </FadeUp>
        </div>

        <div className="space-y-px">
          {siteConfig.about.pillars.map((p, i) => (
            <FadeUp key={p.title} delay={0.1 + i * 0.08}>
              <div className="group p-6 md:p-7 border-l-2 border-primary/40 bg-[rgba(20,17,10,0.45)] hover:bg-[rgba(20,17,10,0.7)] hover:border-primary transition-all">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-xl md:text-2xl uppercase font-bold text-contrast tracking-tight">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.32em] text-primary/70">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-fg/70 leading-relaxed">{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
