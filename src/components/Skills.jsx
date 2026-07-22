import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { fadeUp } from "./ui/animations";
import { Section, SectionHeader } from "./ui/MotionPrimitives";

const Skills = () => {
  return (
    <Section name="skills">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A mobile-first stack with full-stack depth."
          description="Skills are grouped from the original portfolio plus the Android, React Native, and Generative AI capabilities in the resumes."
        />

        <div className="grid gap-3.5 sm:gap-4.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, title, src, level, group }) => (
            <motion.div
              key={id}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.055] p-4 sm:p-5 backdrop-blur-xl transition hover:border-cyan-300/30"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {src ? (
                    <img src={src} alt={title} className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl object-contain bg-white p-1.5 shrink-0" />
                  ) : (
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-cyan-300/[0.14] text-xs sm:text-sm font-black text-cyan-100 shrink-0">
                      {title.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-black text-white text-sm sm:text-base">{title}</h3>
                    <p className="text-[11px] sm:text-xs font-bold text-white/[0.48]">{group}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-black text-cyan-300">{level}%</p>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;

