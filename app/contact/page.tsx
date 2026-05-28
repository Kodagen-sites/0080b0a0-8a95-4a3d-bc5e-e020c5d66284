import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactBlock from "@/components/sections/ContactBlock";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact Sales — Request a demo",
  description:
    "Tell us about the mission. We will respond within 72 hours. AeroVista UAS ship worldwide from Munich.",
};

export const revalidate = 3600;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo request · 72-hour response"
        title="Brief us on the mission."
        intro="Every AeroVista UAS is configured to a single brief. Tell us what the job is — we will scope the airframe and quote within 72 hours."
        image={siteConfig.assets.images["section-contact-hero"] || ""}
      />
      <ContactBlock />
    </>
  );
}
