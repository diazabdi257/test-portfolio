"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Kontak
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Punya ide produk, butuh engineer untuk scale aplikasi, atau ingin
          kolaborasi proyek? Mari kita bangun sesuatu yang impactful bersama.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 transition focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 transition focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 transition focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-500"
            >
              Kirim
            </button>
            {submitted && (
              <p className="text-sm text-emerald-600">
                Pesan berhasil dikirim.
              </p>
            )}
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Terhubung</h3>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 p-3 text-slate-700 hover:bg-slate-50"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.54a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20.44 13.35c0-3.45-1.84-5.06-4.3-5.06-1.98 0-2.86 1.09-3.35 1.85V8.5H9.41V20h3.38v-6.4c0-1.7.32-3.35 2.42-3.35 2.06 0 2.08 1.93 2.08 3.46V20h3.38l-.01-6.65Z" />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 p-3 text-slate-700 hover:bg-slate-50"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24 0-.88-.02-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.88c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.33 4.8-4.56 5.06.36.32.67.94.67 1.9 0 1.37-.02 2.48-.02 2.82 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                href="mailto:diaz.abdi@example.com"
                className="rounded-lg border border-slate-200 p-3 text-slate-700 hover:bg-slate-50"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.6 7h14.8L12 12.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
