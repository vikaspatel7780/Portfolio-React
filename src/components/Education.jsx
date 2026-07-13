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

        <div className="grid gap-5 md:grid-cols-3">
          {education.map(({ id, src, college, course, time, date }) => (
            <AnimatedCard key={id} className="p-6 text-center">
              <img src={src} alt={college} className="mx-auto h-20 w-20 rounded-2xl object-cover ring-1 ring-white/[0.12]" />
              <h3 className="mt-6 text-lg font-black leading-tight text-white">{college}</h3>
              <p className="mt-4 text-sm font-bold text-cyan-100">{course}</p>
              <p className="mt-2 text-sm text-white/50">{time}</p>
              <p className="mt-2 text-sm font-bold text-white/70">{date}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
