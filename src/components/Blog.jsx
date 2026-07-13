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

        <div className="grid gap-5 md:grid-cols-3">
          {blogIdeas.map((post) => (
            <AnimatedCard key={post.title} className="flex min-h-64 flex-col justify-between p-6">
              <div>
                <p className="eyebrow">Draft</p>
                <h3 className="text-2xl font-black leading-tight text-white">{post.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">{post.summary}</p>
              </div>
              <button type="button" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full text-sm font-black text-cyan-100">
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
