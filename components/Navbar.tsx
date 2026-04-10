"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Beranda", href: "#hero" },
  { label: "Pengalaman", href: "#career" },
  { label: "Organisasi", href: "#organization" },
  { label: "Education", href: "#education" },
  { label: "Proyek", href: "#projects" },
  { label: "Keahlian", href: "#skills" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState<string>("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target?.id) {
          setActiveHref(`#${mostVisible.target.id}`);
        }
      },
      { threshold: [0.35, 0.6, 0.9] },
    );

    sections.forEach((section) => observer.observe(section));

    const onHashChange = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <header className="sticky top-3 z-30">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="hidden h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white md:inline-flex"
          aria-label="Home"
        >
          DA
        </a>

        <nav
          aria-label="Primary"
          className="ml-auto rounded-full border border-slate-200/80 bg-white/85 p-1 shadow-sm backdrop-blur"
        >
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    onClick={() => setActiveHref(item.href)}
                    className={`relative z-10 inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="pill-nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-slate-900"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="text-lg leading-none">
              {mobileOpen ? "x" : "="}
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-6 mt-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft md:hidden"
            aria-label="Mobile menu"
          >
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveHref(item.href);
                        setMobileOpen(false);
                      }}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
