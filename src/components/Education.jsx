import { education } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Education = () => {
  return (
    <Section name="education">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Education"
          title="Computer science foundation and academic record."
        />

        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {education.map(({ id, src, college, course, time, date }) => (
            <AnimatedCard key={id} className="p-5 sm:p-6 text-center">
              <img src={src} alt={college} className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover ring-1 ring-white/[0.16]" />
              <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-black leading-tight text-white">{college}</h3>
              <p className="mt-3 text-xs sm:text-sm font-bold text-cyan-300">{course}</p>
              <p className="mt-1.5 text-xs sm:text-sm text-white/50">{time}</p>
              <p className="mt-1.5 text-xs sm:text-sm font-bold text-white/70">{date}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;

