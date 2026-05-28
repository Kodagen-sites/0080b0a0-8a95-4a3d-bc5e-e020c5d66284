import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.company.name}.`,
};

const company = siteConfig.company.name;
const legal = siteConfig.company.legalName;
const email = siteConfig.contact.email;
const jurisdiction = "Munich, Germany";
const effectiveDate = new Date().toLocaleDateString("en-US", {
  year: "numeric", month: "long", day: "numeric",
});

export default function PrivacyPage() {
  return (
    <article className="bg-bg text-fg">
      <header className="section-pad bg-tone-2 border-b border-[var(--hairline)]">
        <div className="container-wide pt-28 md:pt-32">
          <div className="text-eyebrow mb-4">Legal · Effective {effectiveDate}</div>
          <h1 className="text-display text-white font-bold uppercase text-[clamp(40px,6vw,84px)] leading-[0.95]">
            Privacy Policy
          </h1>
        </div>
      </header>

      <section className="section-pad bg-tone-1">
        <div className="container-narrow prose-legal space-y-8 text-fg/85 leading-relaxed">
          <p>
            This policy describes how {legal} (&ldquo;{company}&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) collects, uses, and protects information about you when
            you visit our website or engage with us about an AeroVista UAS.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">What we collect</h2>
          <p>
            When you submit a mission brief or contact us, we collect your name, email,
            company, and the details you provide about your mission. We log standard
            web traffic data (IP, user-agent, referrer) for security and analytics.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">How we use it</h2>
          <p>
            We use submitted briefs solely to scope your UAS configuration and respond
            to your enquiry. We do not sell or share your contact details. We do not
            run marketing email campaigns and do not maintain a newsletter list.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Retention</h2>
          <p>
            Brief data is retained for 24 months after our last contact and then deleted.
            You may request earlier deletion at any time by writing to{" "}
            <a className="text-primary hover:underline" href={`mailto:${email}`}>{email}</a>.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Your rights</h2>
          <p>
            Under GDPR (applicable jurisdiction: {jurisdiction}), you have the right to
            access, correct, port, or delete the data we hold about you, and to lodge
            a complaint with a supervisory authority.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Contact</h2>
          <p>
            Privacy enquiries:{" "}
            <a className="text-primary hover:underline" href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </section>
    </article>
  );
}
