import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { experiences } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Section name="experience" className="bg-white/[0.02] relative">
      <div className="content-shell" ref={containerRef}>
        <SectionHeader
          eyebrow="Experience Timeline"
          title="Production mobile AI work with real product constraints."
          description="Recent engineering work spans Android architecture, SDK integrations, local persistence, LLM orchestration, and offline-first AI behavior."
        />

        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Animated Connecting Vertical Line */}
          <div className="absolute left-2.5 sm:left-4.5 top-3 bottom-3 w-1 bg-white/10 rounded-full" />
          <motion.div
            className="absolute left-2.5 sm:left-4.5 top-3 bottom-3 w-1 bg-gradient-to-b from-cyan-400 via-teal-300 to-blue-500 rounded-full origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="grid gap-8 sm:gap-12">
            {experiences.map((item, index) => (
              <div key={item.company} className="relative">
                {/* Pulsing Timeline Node */}
                <div className="absolute -left-6 sm:-left-10 md:-left-12 top-6 flex h-6 w-6 sm:h-8 sm:w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-300 bg-[#07080b] shadow-[0_0_15px_rgba(94,234,212,0.6)] z-10">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 animate-ping" />
                </div>

                <AnimatedCard className="p-5 sm:p-7 md:p-8">
                  <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3.5 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-cyan-300/[0.14] text-cyan-300">
                        <FiBriefcase size={22} />
                      </div>
                      <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-cyan-200/80">
                        {item.company} • {item.location}
                      </p>
                      <h3 className="mt-1.5 text-xl sm:text-2xl md:text-3xl font-black text-white">{item.title}</h3>
                    </div>
                    <p className="w-fit rounded-full border border-white/[0.14] bg-white/[0.08] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-cyan-100">
                      {item.period}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 grid gap-3 grid-cols-1 md:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3 rounded-2xl border border-white/10 bg-black/[0.2] p-3.5 sm:p-4">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                        <p className="text-xs sm:text-sm leading-6 text-white/[0.75]">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
