"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { FadeUp } from "@/components/motion";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * ContactBlock — CT4 Split Photo + Form. Image left (full-bleed),
 * brief request form right with floating labels.
 */
export default function ContactBlock() {
  const heroImg = siteConfig.assets.images["section-contact-hero"];
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [err, setErr] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErr("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error(await r.text());
      setState("ok");
      e.currentTarget.reset();
    } catch (e: unknown) {
      setState("err");
      setErr(e instanceof Error ? e.message : "Submit failed");
    }
  }

  return (
    <section id="contact" className="bg-tone-2 grid md:grid-cols-2 min-h-[80vh]">
      {/* Left: photo with overlay */}
      <div className="relative min-h-[40vh] md:min-h-[80vh] overflow-hidden bg-tone-1">
        {heroImg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroImg}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "contrast(1.05) saturate(0.85) brightness(0.58)" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-bg/55 via-transparent to-bg/85" />
        <div className="relative h-full p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <FadeUp>
            <div className="text-eyebrow mb-6">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/70" />
              {siteConfig.contact.eyebrow}
            </div>
            <h2 className="text-display text-white font-bold uppercase text-[clamp(34px,5vw,72px)] leading-[0.95] max-w-[16ch]">
              {siteConfig.contact.headline}
            </h2>
            <p className="mt-6 max-w-[40ch] text-fg/85">{siteConfig.contact.body}</p>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-12 space-y-4 text-sm">
            <div className="flex items-start gap-3 text-fg/85">
              <Mail size={16} className="text-primary mt-0.5" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-start gap-3 text-fg/85">
              <Phone size={16} className="text-primary mt-0.5" />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="flex items-start gap-3 text-fg/85">
              <MapPin size={16} className="text-primary mt-0.5" />
              <div>
                {siteConfig.contact.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Right: form */}
      <div className="p-8 md:p-12 lg:p-16 flex items-center">
        <form onSubmit={onSubmit} className="w-full max-w-xl space-y-6">
          <FadeUp>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary mb-2">
              Mission brief
            </div>
            <p className="text-fg/70 text-sm">
              The more specific you can be, the faster we can scope. We respond within 72 hours.
            </p>
          </FadeUp>

          {siteConfig.contact.formFields.map((f) => (
            <FadeUp key={f.name} delay={0.05}>
              <label className="block">
                <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-fg/55 mb-2">
                  {f.label} {f.required ? <span className="text-primary">*</span> : null}
                </span>
                {f.type === "textarea" ? (
                  <textarea
                    name={f.name}
                    required={f.required}
                    rows={5}
                    className="w-full bg-transparent border-b border-[var(--hairline)] focus:border-primary outline-none py-3 text-fg placeholder:text-fg/40 transition-colors resize-none"
                  />
                ) : (
                  <input
                    type={f.type}
                    name={f.name}
                    required={f.required}
                    className="w-full bg-transparent border-b border-[var(--hairline)] focus:border-primary outline-none py-3 text-fg placeholder:text-fg/40 transition-colors"
                  />
                )}
              </label>
            </FadeUp>
          ))}

          <FadeUp delay={0.2} className="flex items-center justify-between pt-4 gap-4 flex-wrap">
            <button
              type="submit"
              disabled={state === "sending"}
              className="btn-gold disabled:opacity-60"
            >
              {state === "sending" ? "Sending…" : "Send brief →"}
            </button>
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-fg/40">
              No spam · No newsletter
            </span>
          </FadeUp>

          {state === "ok" && (
            <p className="text-sm text-primary font-mono uppercase tracking-[0.18em]">
              ✓ Brief received. We will respond within 72 hours.
            </p>
          )}
          {state === "err" && (
            <p className="text-sm text-red-400 font-mono">{err || "Something went wrong"}</p>
          )}
        </form>
      </div>
    </section>
  );
}
