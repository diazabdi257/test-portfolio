import { organizationExperiences } from "@/data/organizations";

export default function OrganizationSection() {
  return (
    <section id="organization" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Pengalaman Organisasi
        </h2>

        <div className="mt-10 border-l-2 border-slate-200 pl-7">
          {organizationExperiences.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-9.25 top-1.5 h-4 w-4 rounded-full border-2 border-brand-600 bg-white" />
              <p className="text-sm text-brand-600">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">
                {item.role}
              </h3>
              <p className="text-sm text-slate-500">{item.organization}</p>
              <p className="mt-3 max-w-3xl text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
