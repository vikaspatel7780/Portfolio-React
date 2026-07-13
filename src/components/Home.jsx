import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import ProfilePhoto from "../assets/ProfilePic4.jpg";
import resume from "../assets/vscoder-resume.pdf";
import { heroStats, profile } from "../data/portfolio";
import { fadeUp, stagger } from "./ui/animations";
import { MagneticButton } from "./ui/MotionPrimitives";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.42], [0, -110]);

  return (
    <section name="home" id="home" className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-16 md:py-24">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl"
        style={{ y }}
      />
      <div className="content-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-2 text-sm font-bold text-white/[0.74] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.9)]" />
            Open to Android, React Native & Gen AI roles
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[clamp(3.2rem,9vw,7.8rem)] font-black leading-[0.86] tracking-normal text-white">
            Mobile AI
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
              Engineer.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.68] md:text-xl">
            I am {profile.name}, a software engineer building premium Android, React Native, and Generative AI products with
            Kotlin, Jetpack Compose, Redux Toolkit, RAG pipelines, LoRA adapters, and offline-first mobile architecture.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/[0.52]">
            <FiMapPin />
            {profile.location}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href={resume} target="_blank" rel="noopener noreferrer">
              <FiDownload /> View Resume
            </MagneticButton>
            <MagneticButton href={profile.github} target="_blank" rel="noopener noreferrer" className="secondary">
              GitHub <FiArrowUpRight />
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-white/[0.48]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative mx-auto w-full max-w-[28rem]"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/[0.18] via-white/[0.04] to-blue-500/[0.18] blur-2xl" />
          <div className="premium-card hero_photo relative p-3">
            <img
              src={ProfilePhoto}
              alt="Vikas Patel profile"
              className="aspect-[4/5] w-full rounded-[1rem] object-cover object-top grayscale-[18%]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/[0.12] bg-black/[0.45] p-4 backdrop-blur-2xl">
              <p className="text-sm font-black text-white">mEinstein AI Assistant</p>
              <p className="mt-1 text-xs leading-5 text-white/[0.62]">Kotlin, Compose, RAG, Gemma, GPT-5, WorkManager</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
