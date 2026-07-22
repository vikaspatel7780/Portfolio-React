import { FiExternalLink } from "react-icons/fi";
import codingTime from "../assets/portfolios/codingTime.jpg";
import { codingProfiles } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Coding = () => {
  return (
    <Section name="coding profile" className="relative overflow-hidden">
      <img src={codingTime} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.08]" />
      <div className="content-shell">
        <SectionHeader
          eyebrow="Coding Profiles"
          title="Algorithmic discipline across competitive platforms."
          description="The original coding profiles and achievements are preserved, cleaned up, and made easier to scan."
        />

        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map(({ id, src, title, rating, description, link }) => (
            <AnimatedCard key={id} className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <img src={src} alt={title} className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white object-contain p-2" />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.08] text-white transition hover:bg-white/[0.16] active:scale-95"
                >
                  <FiExternalLink size={18} />
                </a>
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-black text-white">{title}</h3>
              <p className="mt-2.5 text-xs sm:text-sm font-bold text-cyan-300">{rating}</p>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-white/[0.65]">{description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Coding;

