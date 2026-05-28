import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About AeroVista",
  description:
    "Carbon-fiber UAS, hand-finished in Munich. Built to order for cinematographers, surveyors, and inspection crews.",
};

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={siteConfig.about.eyebrow}
        title={siteConfig.about.headline.split(". ")[0] + "."}
        intro={siteConfig.about.body.split(". ").slice(0, 2).join(". ") + "."}
        image={siteConfig.assets.images["section-about-hero"] || ""}
      />
      <About />
      <Stats />
      <CTASection />
    </>
  );
}
