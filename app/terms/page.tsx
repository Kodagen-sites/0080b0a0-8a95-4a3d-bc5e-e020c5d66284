import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${siteConfig.company.name}.`,
};

const company = siteConfig.company.name;
const legal = siteConfig.company.legalName;
const email = siteConfig.contact.email;
const jurisdiction = "Munich, Germany";
const effectiveDate = new Date().toLocaleDateString("en-US", {
  year: "numeric", month: "long", day: "numeric",
});

export default function TermsPage() {
  return (
    <article className="bg-bg text-fg">
      <header className="section-pad bg-tone-2 border-b border-[var(--hairline)]">
        <div className="container-wide pt-28 md:pt-32">
          <div className="text-eyebrow mb-4">Legal · Effective {effectiveDate}</div>
          <h1 className="text-display text-white font-bold uppercase text-[clamp(40px,6vw,84px)] leading-[0.95]">
            Terms of Use
          </h1>
        </div>
      </header>

      <section className="section-pad bg-tone-1">
        <div className="container-narrow prose-legal space-y-8 text-fg/85 leading-relaxed">
          <p>
            These terms govern your use of the {company} website and any communications
            you initiate with {legal} regarding our UAS products. By using the site you
            agree to these terms.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Use of the site</h2>
          <p>
            The site is provided as an information and configuration resource. All
            content — product specifications, prices, lead times — is indicative and
            subject to written confirmation in a signed order.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">No warranty by demonstration</h2>
          <p>
            Performance figures and operational envelopes described on this site are
            based on factory test conditions. Field performance is subject to mission
            profile, payload, environmental conditions, and regulatory constraints in
            the airspace of operation.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Regulatory responsibility</h2>
          <p>
            The operator is solely responsible for compliance with all UAS operating
            regulations applicable in the jurisdiction of flight, including any
            licencing, registration, BVLOS authorisation, and insurance requirements.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Intellectual property</h2>
          <p>
            All copy, images, video, and product designs on this site are © {legal}.
            Reproduction without written consent is not permitted.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Governing law</h2>
          <p>
            These terms are governed by the laws of Germany. Disputes are subject to
            the exclusive jurisdiction of the courts of {jurisdiction}.
          </p>

          <h2 className="text-2xl font-display uppercase text-contrast tracking-tight pt-6">Contact</h2>
          <p>
            Legal enquiries:{" "}
            <a className="text-primary hover:underline" href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </section>
    </article>
  );
}
