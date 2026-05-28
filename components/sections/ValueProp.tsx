import FadeUp from "@/components/motion/FadeUp";
import { siteConfig } from "@/content/site-config";

export default function ValueProp() {
  return (
    <section className="section-pad bg-tone-2 relative">
      <div className="container-wide grid md:grid-cols-12 gap-10">
        <FadeUp className="md:col-span-4">
          <div className="text-eyebrow mb-6">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
            {siteConfig.valueProp.eyebrow}
          </div>
          <div className="hidden md:block h-px w-full bg-[var(--hairline)]" />
        </FadeUp>

        <div className="md:col-span-8 space-y-8">
          <FadeUp>
            <h2 className="text-display text-white font-bold uppercase text-[clamp(32px,4.5vw,64px)] leading-[1.0]">
              {siteConfig.valueProp.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-[60ch] text-lg leading-relaxed text-fg/75">
              {siteConfig.valueProp.body}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
