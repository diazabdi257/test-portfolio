import { skills, type SkillItem } from "@/data/skills";
import Image from "next/image";
import type { CSSProperties } from "react";

function Logo({ skill }: { skill: SkillItem }) {
  return (
    <Image
      src={skill.logoSrc}
      alt={`${skill.name} logo`}
      width={48}
      height={48}
      className="h-12 w-12 object-contain"
      loading="lazy"
      unoptimized
    />
  );
}

export default function SkillsGrid() {
  const logoLoopSpeed = 100;
  const logoLoopGap = 20;
  const logoCardWidth = 140;
  const loopDistance =
    skills.length * logoCardWidth + (skills.length - 1) * logoLoopGap;
  const logoLoopDuration = loopDistance / logoLoopSpeed;

  const loopStyle = {
    "--logo-gap": `${logoLoopGap}px`,
    "--logo-loop-duration": `${logoLoopDuration}s`,
  } as CSSProperties & Record<string, string>;

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
          Skills
        </h2>

        <div
          className="logo-loop relative mt-10"
          style={loopStyle}
          aria-label="Skill logo loop"
        >
          <div className="logo-loop-track">
            <div className="logo-loop-group">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex w-40 shrink-0 flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-5"
                >
                  <div className="flex h-15 items-center justify-center">
                    <Logo skill={skill} />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-slate-600">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="logo-loop-group" aria-hidden="true">
              {skills.map((skill) => (
                <div
                  key={`clone-${skill.name}`}
                  className="flex w-40 shrink-0 flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-5"
                >
                  <div className="flex h-15 items-center justify-center">
                    <Logo skill={skill} />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-slate-600">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-slate-50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
