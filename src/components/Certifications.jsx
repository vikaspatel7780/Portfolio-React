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
        <div className="grid gap-3.5 sm:gap-4 grid-cols-1 md:grid-cols-2">
          {certifications.map((item) => (
            <AnimatedCard key={item} className="flex gap-3.5 sm:gap-4 p-4 sm:p-5 items-start">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/[0.14] text-amber-300">
                <FiAward size={20} />
              </div>
              <p className="text-xs sm:text-sm leading-6 text-white/80">{item}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;

