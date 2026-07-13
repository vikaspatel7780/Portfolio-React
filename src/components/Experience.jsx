import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { experiences } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Experience = () => {
  return (
    <Section name="experience" className="bg-white/[0.02]">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Production mobile AI work with real product constraints."
          description="Recent engineering work spans Android architecture, SDK integrations, local persistence, LLM orchestration, and offline-first AI behavior."
        />

        <div className="grid gap-5">
          {experiences.map((item) => (
            <AnimatedCard key={item.company} className="p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/[0.12] text-cyan-200">
                    <FiBriefcase size={24} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/[0.42]">{item.company} - {item.location}</p>
                  <h3 className="mt-2 max-w-3xl text-2xl font-black text-white md:text-4xl">{item.title}</h3>
                </div>
                <p className="w-fit rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm font-bold text-white/[0.62]">{item.period}</p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3 rounded-2xl border border-white/10 bg-black/[0.14] p-4">
                    <FiCheckCircle className="mt-1 shrink-0 text-cyan-200" />
                    <p className="text-sm leading-6 text-white/[0.68]">{highlight}</p>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
