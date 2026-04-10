import { certifications, educationHistory } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Education & Sertifikasi
        </h2>

        <div className="mt-10 space-y-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Education
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {educationHistory.map((item) => (
                <article
                  key={`${item.institution}-${item.degree}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-medium text-brand-600">
                    {item.period}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-slate-500">{item.institution}</p>
                  <p className="mt-3 text-slate-600">{item.summary}</p>

                  <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                    <p className="text-sm font-medium text-slate-700">
                      IPK/Nilai:{" "}
                      <span className="text-slate-900">{item.gpa}</span>
                    </p>
                    <a
                      href={item.proofPdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Lihat Bukti PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Sertifikasi
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {certifications.map((item) => (
                <article
                  key={`${item.issuer}-${item.title}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-medium text-brand-600">
                    {item.year}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500">{item.issuer}</p>
                  <p className="mt-3 text-slate-600">{item.summary}</p>

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <a
                      href={item.proofPdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Lihat Sertifikat PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
