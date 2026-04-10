import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OrganizationSection from "@/components/OrganizationSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <OrganizationSection />
        <EducationSection />

        <section id="projects" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-2xl font-bold md:text-3xl">Project</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <SkillsGrid />
        <ContactSection />
      </main>
    </div>
  );
}
