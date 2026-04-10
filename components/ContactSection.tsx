export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Let&apos;s Connect
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
            Kontak
          </h2>
          <p className="mt-3 text-slate-600">
            Tertarik untuk bekerja sama atau sekadar ingin terhubung? Silakan
            pilih platform di bawah ini.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <h3 className="text-center text-lg font-semibold text-slate-900">
              Terhubung Dengan Saya
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a
                href="https://www.linkedin.com/in/diazabdi/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/40 p-4 text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-white"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.54a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20.44 13.35c0-3.45-1.84-5.06-4.3-5.06-1.98 0-2.86 1.09-3.35 1.85V8.5H9.41V20h3.38v-6.4c0-1.7.32-3.35 2.42-3.35 2.06 0 2.08 1.93 2.08 3.46V20h3.38l-.01-6.65Z" />
                </svg>
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/diazabdi257"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/40 p-4 text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-white"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24 0-.88-.02-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.88c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.33 4.8-4.56 5.06.36.32.67.94.67 1.9 0 1.37-.02 2.48-.02 2.82 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                </svg>
                <span className="text-sm font-semibold">GitHub</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=diazabdi09@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/40 p-4 text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-white"
                aria-label="Email"
                title="Kirim email ke diazabdi09@gmail.com"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span className="text-sm font-semibold">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
