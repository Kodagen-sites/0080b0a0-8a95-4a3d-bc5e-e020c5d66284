"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * ServiceCard — CV6 Brutalist, themed for Noir & Gold.
 * Hard 1px gold-rim border, hard offset shadow, mono micro-type.
 * Card pushes toward cursor on hover (shadow snaps in).
 */

type Service = {
  slug: string;
  name: string;
  shortName?: string;
  description: string;
};

type Props = {
  service: Service;
  index: number;
  imageSrc?: string;
};

export default function ServiceCard({ service, index, imageSrc }: Props) {
  const num = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative block h-full transition-transform duration-150 ease-out hover:-translate-x-1 hover:-translate-y-1"
      style={{
        background: "#0F0F0F",
        color: "var(--contrast)",
        border: "1px solid rgba(212, 163, 90, 0.35)",
        boxShadow: "8px 8px 0 0 rgba(212,163,90,0.85)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "4px 4px 0 0 rgba(212,163,90,1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "8px 8px 0 0 rgba(212,163,90,0.85)";
      }}
    >
      {imageSrc && (
        <div className="relative aspect-[4/3] overflow-hidden border-b border-[rgba(212,163,90,0.35)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={service.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ filter: "contrast(1.05) saturate(0.9) brightness(0.78)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>
      )}

      <div className="p-6 md:p-7">
        <div className="flex items-baseline justify-between mb-5">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-primary">
            Lineup · {num}
          </div>
          <ArrowUpRight size={16} className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight leading-[1.05] mb-4 text-contrast">
          {service.name}
        </h3>

        <p className="font-body text-sm leading-relaxed text-fg/75">{service.description}</p>

        <div className="mt-6 pt-4 font-mono text-[10px] tracking-[0.32em] uppercase font-bold text-primary border-t border-[rgba(212,163,90,0.35)]">
          Read brief →
        </div>
      </div>
    </Link>
  );
}
