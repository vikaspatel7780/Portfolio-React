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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, title, src, level, group }) => (
            <motion.div
              key={id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {src ? (
                    <img src={src} alt={title} className="h-11 w-11 rounded-2xl object-contain bg-white p-1.5" />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/[0.12] text-sm font-black text-cyan-100">
                      {title.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-black text-white">{title}</h3>
                    <p className="text-xs font-bold text-white/[0.42]">{group}</p>
                  </div>
                </div>
                <p className="text-sm font-black text-cyan-100">{level}%</p>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-blue-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
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
