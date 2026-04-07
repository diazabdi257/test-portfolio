import { careerJourney, careerJourney2 } from "@/data/career";

export default function Timeline() {
  return (
    <section id="career" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Career Journey
        </h2>
        <div className="mt-10 border-l-2 border-slate-200 pl-7">
          {careerJourney.map((item) => (
            <article key={item.role} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-brand-600 bg-white" />
              <p className="text-sm text-brand-600">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">
                {item.role}
              </h3>
              <p className="text-sm text-slate-500">{item.company}</p>
              <p className="mt-3 max-w-3xl text-slate-600">{item.summary}</p>
            </article>
          ))}
          {careerJourney2.map((item) => (
            <article key={item.role} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-brand-600 bg-white" />
              <p className="text-sm text-brand-600">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">
                {item.role}
              </h3>
              <p className="text-sm text-slate-500">{item.company}</p>
              <p className="mt-3 max-w-3xl text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}