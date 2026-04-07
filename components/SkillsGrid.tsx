import { skills } from "@/data/skills";

function Logo({ name }: { name: string }) {
  if (name === "React") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <circle cx="32" cy="32" r="4" fill="#38bdf8" />
        <ellipse
          cx="32"
          cy="32"
          rx="22"
          ry="9"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="22"
          ry="9"
          transform="rotate(60 32 32)"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="22"
          ry="9"
          transform="rotate(120 32 32)"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (name === "Next.js") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#111827" />
        <path d="M20 43V21h3.4l17.2 22h-3.9L23.6 25.9V43H20Z" fill="#fff" />
      </svg>
    );
  }

  if (name === "Tailwind") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <path
          d="M20 25c2.5-6 6-9 10.5-9 6.7 0 7.5 5 10.8 6.7 2.2 1.1 4.8.8 7.7-1.1-2.5 6-6 9-10.5 9-6.7 0-7.5-5-10.8-6.7-2.2-1.1-4.8-.8-7.7 1.1Zm-5 12c2.5-6 6-9 10.5-9 6.7 0 7.5 5 10.8 6.7 2.2 1.1 4.8.8 7.7-1.1-2.5 6-6 9-10.5 9-6.7 0-7.5-5-10.8-6.7-2.2-1.1-4.8-.8-7.7 1.1Z"
          fill="#06b6d4"
        />
      </svg>
    );
  }

  if (name === "SQL") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <ellipse cx="32" cy="16" rx="18" ry="8" fill="#475569" />
        <path d="M14 16v24c0 4.4 8 8 18 8s18-3.6 18-8V16" fill="#64748b" />
        <ellipse cx="32" cy="40" rx="18" ry="8" fill="#94a3b8" />
      </svg>
    );
  }

  if (name === "Kotlin") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <path d="M22 45h20c0 6-4.5 9-10 9s-10-3-10-9Z" fill="#ef4444" />
        <path
          d="M32 10c3 3-2 5-2 8 0 2 2 3 2 5 0 2-1 3-3 5m10-13c3 3-2 5-2 8"
          fill="none"
          stroke="#0284c7"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
      <path d="M32 6 12 18v28l20 12 20-12V18L32 6Z" fill="#f97316" />
      <path d="M32 6v52" stroke="#fff" strokeWidth="3" />
      <path d="M12 18h40" stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

export default function SkillsGrid() {
  const groups = ["Frontend", "Backend & Database", "Mobile"] as const;

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Keahlian & Layanan
        </h2>

        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {group}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {skills
                  .filter((skill) => skill.category === group)
                  .map((skill) => (
                    <div key={skill.name} className="group relative rounded-xl border border-slate-200 bg-white p-4 text-slate-900">
                      <div className="flex items-center justify-center">
                        <Logo name={skill.name} />
                      </div>
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}