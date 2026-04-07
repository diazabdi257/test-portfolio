"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-64px)] items-center py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-3 font-semibold text-brand-600">Halo, saya Diaz Abdi</p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Software Engineer | Web & Mobile Developer
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">
            Saya fokus merancang UI/UX yang mulus hingga integrasi backend yang
            tangguh untuk menghasilkan produk digital yang cepat, stabil, dan
            bernilai bisnis.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-500"
            >
              Mari Berdiskusi
            </a>
            <a
              href="/cv-diaz-abdi.pdf"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50"
            >
              Unduh CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="relative mx-auto h-72 w-72 md:h-96 md:w-96"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-50 to-white shadow-soft" />
          <Image
            src="/images/kompres.png"
            alt="Foto profil Diaz Abdi"
            fill
            priority
            className="rounded-3xl object-cover p-2"
          />
        </motion.div>
      </div>
    </section>
  );
}