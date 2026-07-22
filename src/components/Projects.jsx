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

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} className={index === 0 ? "lg:col-span-2" : ""}>
              {project.src ? (
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img src={project.src} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.85] via-black/[0.25] to-transparent" />
                </div>
              ) : null}
              <div className="p-5 sm:p-7">
                <p className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-cyan-300">{project.category}</p>
                <h3 className="mt-2.5 text-2xl sm:text-3xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-white/[0.7]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold text-cyan-100/90">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-4 py-2 text-xs sm:text-sm font-black text-white transition hover:bg-white/[0.16] active:scale-95"
                    >
                      <FiGithub /> GitHub
                    </a>
                  ) : null}
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-4 py-2 text-xs sm:text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.25] active:scale-95"
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

