import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import ProfilePhoto from "../assets/ProfilePic5.jpeg";
import resume from "../assets/vscoder-resume.pdf";
import { heroStats, profile } from "../data/portfolio";
import { fadeUp, stagger } from "./ui/animations";
import { MagneticButton } from "./ui/MotionPrimitives";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.42], [0, -110]);

  return (
    <section name="home" id="home" className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-10 sm:py-16 md:py-24">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl"
        style={{ y }}
      />
      <div className="content-shell grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl text-left">
          <motion.div variants={fadeUp} className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white/[0.78] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.9)] animate-pulse" />
            Open to Android, React Native & Gen AI roles
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[clamp(2.4rem,7.5vw,7rem)] font-black leading-[0.92] sm:leading-[0.88] tracking-tight text-white">
            Mobile AI
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
              Engineer.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/[0.72]">
            I am {profile.name}, a software engineer building premium Android, React Native, and Generative AI products with
            Kotlin, Jetpack Compose, Redux Toolkit, RAG pipelines, LoRA adapters, and offline-first mobile architecture.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/[0.55]">
            <FiMapPin className="text-cyan-300" />
            {profile.location}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3">
            <MagneticButton href={resume} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <FiDownload /> View Resume
            </MagneticButton>
            <MagneticButton href={profile.github} target="_blank" rel="noopener noreferrer" className="secondary w-full sm:w-auto">
              GitHub <FiArrowUpRight />
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 sm:mt-11 grid grid-cols-2 gap-2.5 sm:gap-3.5 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.055] p-3.5 sm:p-4 backdrop-blur-xl transition hover:border-cyan-300/30">
                <p className="text-xl sm:text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold leading-4 sm:leading-5 text-white/[0.52]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-[28rem] mt-4 lg:mt-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/[0.2] via-teal-400/[0.05] to-blue-500/[0.2] blur-2xl" />
          <div className="premium-card hero_photo relative p-2.5 sm:p-3">
            <img
              src={ProfilePhoto}
              alt="Vikas Patel profile"
              className="aspect-[4/5] w-full rounded-[1rem] object-cover object-top grayscale-[12%]"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl sm:rounded-3xl border border-white/[0.14] bg-black/[0.6] p-3 sm:p-4 backdrop-blur-2xl">
              <p className="text-xs sm:text-sm font-black text-white flex items-center justify-between">
                mEinstein AI Assistant
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-ping" />
              </p>
              <p className="mt-1 text-[11px] sm:text-xs leading-4 sm:leading-5 text-white/[0.68]">Kotlin, Compose, RAG, Gemma, GPT-5, WorkManager</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

