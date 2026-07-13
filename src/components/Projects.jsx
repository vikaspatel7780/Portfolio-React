import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Projects = () => {
  return (
    <Section name="projects" className="bg-white/[0.02]">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Portfolio projects with a stronger product story."
          description="The original projects are preserved and upgraded alongside newer Android, React Native, and AI work from the resume."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} className={index === 0 ? "lg:col-span-2" : ""}>
              {project.src ? (
                <div className="relative h-64 overflow-hidden md:h-80">
                  <img src={project.src} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.82] via-black/[0.18] to-transparent" />
                </div>
              ) : null}
              <div className="p-6 md:p-7">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-200/80">{project.category}</p>
                <h3 className="mt-3 text-3xl font-black text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/[0.62]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-bold text-white/[0.64]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm font-black text-white transition hover:bg-white/[0.14]"
                    >
                      <FiGithub /> GitHub
                    </a>
                  ) : null}
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-200/[0.16]"
                    >
                      Live <FiArrowUpRight />
                    </a>
                  ) : null}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
