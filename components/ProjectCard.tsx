"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export default function ProjectCard({
  title,
  summary,
  tags,
  repoUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-soft"
    >
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3 opacity-0 transition-opacity group-hover:opacity-100">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
          >
            Lihat Repositori
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700"
          >
            Lihat Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
