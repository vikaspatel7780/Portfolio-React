import { FiAward } from "react-icons/fi";
import { certifications } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Certifications = () => {
  return (
    <Section name="certifications" className="bg-white/[0.02]">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Certifications & Recognition"
          title="Signals of craft, consistency, and research curiosity."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <AnimatedCard key={item} className="flex gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/[0.12] text-amber-200">
                <FiAward />
              </div>
              <p className="text-sm leading-6 text-white/70">{item}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
