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
          <motion.div variants={fadeUp} className="relative mx-auto max-w-[15rem] sm:max-w-xs lg:max-w-sm">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-300/25 via-teal-400/10 to-rose-300/15 blur-2xl animate-orb" />
            <img
              src={Image}
              alt="Vikas Patel"
              className="relative aspect-square w-full rounded-full border-2 border-white/[0.18] object-cover p-2 shadow-2xl shadow-black/50"
            />
          </motion.div>

          <AnimatedCard className="p-5 sm:p-7 md:p-8">
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/80">
              I started with C++, JavaScript, React.js, Node.js, and MongoDB, building projects like Photogram, a Twitter clone,
              and a blog website. Today my work is centered on mobile engineering and Generative AI: Kotlin, Jetpack Compose,
              MVVM, Room, Retrofit, React Native, Redux Toolkit, on-device Gemma inference, RAG pipelines, LoRA customization,
              and prompt systems that make apps feel intelligent while staying fast and reliable.
            </p>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-white/80">
              I have solved 700+ coding problems, achieved 3 Star on CodeChef, and presented a blockchain-based Twitter DApp at
              ICICCT-2024. That mix of product craft, system thinking, and algorithmic discipline is what I bring into every build.
            </p>

            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {focusAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-xs sm:text-sm font-bold text-cyan-100 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
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

