import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX, FiCheck, FiLayers } from "react-icons/fi";
import { projects } from "../data/portfolio";
import { Section, SectionHeader } from "./ui/MotionPrimitives";
import TiltCard from "./ui/TiltCard";

const categories = ["All", "Mobile Apps", "Full Stack", "Gen AI & ML"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Mobile Apps") return project.category.includes("Android") || project.category.includes("React Native") || project.category.includes("Mobile");
    if (selectedCategory === "Gen AI & ML") return project.category.includes("AI") || project.stack.some(s => s.includes("Gemma") || s.includes("RAG") || s.includes("LoRA"));
    if (selectedCategory === "Full Stack") return project.category.includes("Full Stack") || project.category.includes("Web");
    return true;
  });

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <Section name="projects" className="bg-white/[0.02] relative">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Portfolio projects with a stronger product story."
          description="Click any project card to inspect expanded architectural details, live links, and complete technical stacks."
        />

        {/* Filter Category Tabs */}
        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition duration-300 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-600/80 shadow-lg shadow-cyan-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <FiLayers size={14} /> {cat}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className={index === 0 && filteredProjects.length > 1 ? "lg:col-span-2" : ""}
              >
                <TiltCard onClick={() => setSelectedProject(project)}>
                  <motion.div layoutId={`card-container-${project.id}`}>
                    {project.src ? (
                      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-[1.3rem]">
                        <motion.img
                          layoutId={`card-img-${project.id}`}
                          src={project.src}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.85] via-black/[0.25] to-transparent" />
                      </div>
                    ) : null}

                    <div className="p-5 sm:p-7">
                      <motion.p layoutId={`card-cat-${project.id}`} className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                        {project.category}
                      </motion.p>
                      <motion.h3 layoutId={`card-title-${project.id}`} className="mt-2.5 text-2xl sm:text-3xl font-black text-white">
                        {project.title}
                      </motion.h3>
                      <motion.p layoutId={`card-desc-${project.id}`} className="mt-3 text-xs sm:text-sm leading-6 text-white/[0.7]">
                        {project.description}
                      </motion.p>

                      <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold text-cyan-100/90">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300 group-hover:underline flex items-center gap-1">
                          Click to expand details <FiArrowUpRight />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>


      {/* Shared Element Modal Expansion */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#0c1017] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>

              {selectedProject.src && (
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl mb-6">
                  <motion.img
                    layoutId={`card-img-${selectedProject.id}`}
                    src={selectedProject.src}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <motion.p layoutId={`card-cat-${selectedProject.id}`} className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                {selectedProject.category}
              </motion.p>
              <motion.h3 layoutId={`card-title-${selectedProject.id}`} className="mt-2 text-2xl sm:text-4xl font-black text-white">
                {selectedProject.title}
              </motion.h3>
              <motion.p layoutId={`card-desc-${selectedProject.id}`} className="mt-4 text-sm sm:text-base leading-7 text-white/80">
                {selectedProject.description}
              </motion.p>

              {/* Extended Highlights */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h4 className="text-sm font-black uppercase tracking-wider text-cyan-300 mb-3">Key Highlights & Architecture</h4>
                <div className="grid gap-2.5">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                    <FiCheck className="mt-1 shrink-0 text-cyan-300" />
                    <span>Optimized layout with high refresh performance and minimal state recalculations.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                    <FiCheck className="mt-1 shrink-0 text-cyan-300" />
                    <span>Clean code architecture adhering to modern UI/UX design standards.</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-white/50 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20 active:scale-95"
                  >
                    <FiGithub size={18} /> View Source Code
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/20 px-5 py-2.5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/30 active:scale-95"
                  >
                    Live Demo <FiArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
