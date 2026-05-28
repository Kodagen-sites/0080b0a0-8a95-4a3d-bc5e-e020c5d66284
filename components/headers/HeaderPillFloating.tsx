"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useIsMobile, useScrollState } from "./hooks";

/**
 * HeaderPillFloating — glassy noir pill, gold accent CTA. Noir & Gold theme.
 */
export default function HeaderPillFloating() {
  const scrolled = useScrollState(20);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-5 inset-x-4 md:inset-x-0 z-40 flex justify-center pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center gap-1 md:gap-2 rounded-full border backdrop-blur-2xl transition-all duration-500 ${
            scrolled
              ? "bg-[#0A0A0A]/80 border-[rgba(212,163,90,0.28)] shadow-[0_18px_60px_-20px_rgba(0,0,0,0.65)]"
              : "bg-[rgba(20,17,10,0.45)] border-[rgba(232,216,172,0.10)]"
          }`}
          style={{ padding: "6px 8px" }}
        >
          <Link
            href="/"
            className="px-3 md:px-4 py-2 font-display font-bold tracking-[0.18em] uppercase text-xs md:text-sm text-contrast"
          >
            {siteConfig.company.name}
          </Link>

          {!isMobile && (
            <nav className="flex items-center gap-1 mx-2">
              {NAV_LINKS.filter((l) => ["/services", "/about", "/contact"].includes(l.href)).map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.22em] transition-colors ${
                      active ? "text-contrast" : "text-contrast/65 hover:text-contrast"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="pill-active"
                        className="absolute inset-0 bg-[rgba(212,163,90,0.14)] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          )}

          {!isMobile ? (
            <Link href="/contact" className="btn-gold !py-2 !px-4 !text-[11px]">
              Contact Sales
            </Link>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="w-9 h-9 rounded-full flex items-center justify-center text-contrast hover:bg-[rgba(212,163,90,0.10)]"
            >
              <Menu size={18} />
            </button>
          )}
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-bg md:hidden"
    >
      <div className="flex items-center justify-between p-6">
        <div className="font-display font-bold tracking-[0.18em] uppercase text-sm text-contrast">
          {siteConfig.company.name}
        </div>
        <button onClick={onClose} className="text-contrast" aria-label="Close menu">
          <X size={22} />
        </button>
      </div>
      <ul className="flex flex-col gap-6 p-6">
        {NAV_LINKS.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl text-contrast hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="absolute bottom-6 inset-x-6">
        <Link href="/contact" onClick={onClose} className="btn-gold w-full justify-center">
          Contact Sales →
        </Link>
      </div>
    </motion.div>
  );
}
