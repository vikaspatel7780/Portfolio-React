import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { experience } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <Section name="experience" className="bg-white/[0.02]">
      <div className="content-shell" ref={containerRef}>
        <SectionHeader
          eyebrow="Experience"
          title="Professional Experience"
          description="Android • React Native • AI Development"
        />

        <div className="relative pl-8">
          {/* Timeline */}
          <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-white/10 rounded-full" />

          <motion.div
            className="absolute left-3 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-cyan-400 via-teal-300 to-blue-500 origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.company} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-5 top-7 h-4 w-4 rounded-full border-2 border-cyan-300 bg-[#030712] shadow-lg shadow-cyan-400/40" />

                <AnimatedCard className="group p-5 transition-all duration-500 hover:shadow-cyan-400/20">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Left */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                        <FiBriefcase size={20} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm text-cyan-300">
                          {item.company}
                        </p>

                        <p className="text-xs text-white/50">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Right */}
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {item.period}
                    </span>
                  </div>

                  {/* Hover Details */}
                  <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:mt-5 group-hover:max-h-96 group-hover:opacity-100">
                    <div className="grid gap-3 md:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                        >
                          <FiCheckCircle
                            className="mt-1 text-cyan-300 shrink-0"
                            size={16}
                          />

                          <p className="text-sm text-white/70">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
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