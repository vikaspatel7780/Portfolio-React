import { FiArrowUpRight } from "react-icons/fi";
import { blogIdeas } from "../data/portfolio";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const Blog = () => {
  return (
    <Section name="blog">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Blog"
          title="Engineering notes worth expanding."
          description="A premium portfolio benefits from visible thinking, so these article cards turn the existing portfolio into a place for deeper mobile and AI writing."
        />

        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogIdeas.map((post) => (
            <AnimatedCard key={post.title} className="flex min-h-[14rem] sm:min-h-[16rem] flex-col justify-between p-5 sm:p-6">
              <div>
                <p className="eyebrow">Draft</p>
                <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">{post.title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-white/65">{post.summary}</p>
              </div>
              <button type="button" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full text-xs sm:text-sm font-black text-cyan-300 transition hover:text-white active:scale-95">
                Read soon <FiArrowUpRight />
              </button>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Blog;

