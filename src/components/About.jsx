import { motion } from "framer-motion";
import Image from "../assets/ProfilePic2.jpg";
import { fadeUp } from "./ui/animations";
import { AnimatedCard, Section, SectionHeader } from "./ui/MotionPrimitives";

const focusAreas = ["Android Architecture", "React Native Apps", "Generative AI", "Offline-first Systems"];

const About = () => {
  return (
    <Section name="about">
      <div className="content-shell">
        <SectionHeader
          eyebrow="About"
          title="Engineer for polished mobile products and practical AI."
          description="A Computer Science graduate from IERT with hands-on production work across Android, React Native, full-stack web projects, and LLM-powered user experiences."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div variants={fadeUp} className="relative mx-auto hidden max-w-sm lg:block">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-300/20 to-rose-300/10 blur-2xl" />
            <img
              src={Image}
              alt="Vikas Patel"
              className="relative aspect-square w-full rounded-full border border-white/[0.14] object-cover p-2 shadow-2xl shadow-black/40"
            />
          </motion.div>

          <AnimatedCard className="p-6 md:p-8">
            <p className="text-lg leading-8 text-white/70">
              I started with C++, JavaScript, React.js, Node.js, and MongoDB, building projects like Photogram, a Twitter clone,
              and a blog website. Today my work is centered on mobile engineering and Generative AI: Kotlin, Jetpack Compose,
              MVVM, Room, Retrofit, React Native, Redux Toolkit, on-device Gemma inference, RAG pipelines, LoRA customization,
              and prompt systems that make apps feel intelligent while staying fast and reliable.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/70">
              I have solved 700+ coding problems, achieved 3 Star on CodeChef, and presented a blockchain-based Twitter DApp at
              ICICCT-2024. That mix of product craft, system thinking, and algorithmic discipline is what I bring into every build.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-white/[0.76]">
                  {area}
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </div>
    </Section>
  );
};

export default About;
