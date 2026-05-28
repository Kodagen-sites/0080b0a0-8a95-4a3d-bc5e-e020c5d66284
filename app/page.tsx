import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import CTASection from "@/components/sections/CTASection";
import ContactBlock from "@/components/sections/ContactBlock";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
};

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProp />
      <Services />
      <About />
      <Stats />
      <CTASection />
      <ContactBlock />
    </>
  );
}
