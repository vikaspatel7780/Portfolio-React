import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Coding from "./components/Coding";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import GenAI from "./components/GenAI";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import AITerminal from "./components/ui/AITerminal";
import {
  Brain,
  Cpu,
  Bot,
  Code2,
  Database,
  Smartphone,
  Sparkles,
  Rocket,
  X,
  Cloud,
} from "lucide-react";

import ConstellationCanvas from "./components/ui/ConstellationCanvas";
import SpotlightCursor from "./components/ui/SpotlightCursor";
import SectionDivider from "./components/ui/SectionDivider";
import CommandPalette from "./components/ui/CommandPalette";



const icons = [
  { Icon: Brain, angle: 0 },
  { Icon: Cpu, angle: 45 },
  { Icon: Code2, angle: 90 },
  { Icon: Database, angle: 135 },
  { Icon: Smartphone, angle: 180 },
  { Icon: Sparkles, angle: 225 },
  { Icon: Rocket, angle: 270 },
  { Icon: Cloud, angle: 315 },
];
function LoadingScreen() {
  
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]"
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <div className="relative mx-auto h-48 w-48">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-400/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icons.map(({ Icon, angle }, index) => (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-96px) rotate(-${angle}deg)`,
                  transformOrigin: "center",
                }}
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    duration: 2 + index * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <Icon size={18} className="text-cyan-400" />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Middle Ring */}
          <motion.div
            className="absolute left-6 top-6 h-36 w-36 rounded-full border border-violet-400/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner Ring */}
          <motion.div
            className="absolute left-12 top-12 h-24 w-24 rounded-full border border-emerald-400/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Center Glow */}
        

          {/* Floating Particles */}
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: Math.random(),
              }}
            />
          ))}
        </div>

        <motion.h2
          className="mt-8 text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Vikas Patel
        </motion.h2>

        <motion.p
          className="mt-2 text-sm text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Crafting Mobile AI Experiences...
        </motion.p>
      </div>
    </motion.div>
  );
}
function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-cyan-200 shadow-2xl backdrop-blur-xl transition hover:border-cyan-300 hover:text-white"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
function OpenChatBot() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating AI Button */}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            exit={{ opacity: 0, scale: 0.8, x: 40 }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="group fixed bottom-24 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0B1220]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-400/20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <Bot size={22} className="relative z-10 text-cyan-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* AI Modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 right-8 z-[100] w-[420px] max-w-[95vw]"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-4 -right-4 z-10 rounded-full bg-slate-900 p-2 text-white shadow-lg"
              >
                <X size={18} />
              </button>

              <AITerminal />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
function App() {
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  return (
    <div className="app-shell min-h-screen relative overflow-hidden">
      {/* Interactive Constellation Particle Canvas Background */}
      <ConstellationCanvas />

      {/* Interactive Spotlight Cursor */}
      <SpotlightCursor />

      {/* Cmd+K Command Palette */}
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Ambient Animated Glow Orbs */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        <div className="animate-orb absolute top-[-10%] left-[-10%] h-[35rem] w-[35rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="animate-orb absolute top-[40%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[130px]" style={{ animationDelay: "3s" }} />
        <div className="animate-orb absolute bottom-[-5%] left-[20%] h-[28rem] w-[28rem] rounded-full bg-purple-500/10 blur-[120px]" style={{ animationDelay: "6s" }} />
      </div>

      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <Navbar onOpenCommandPalette={() => setCmdOpen(true)} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="relative z-10 pt-16 sm:pt-20"
      >
        <Home />
        <SocialLinks />
        <SectionDivider variant="wave" />
        <About />
        <SectionDivider variant="slope" />
        <Experience />
        <SectionDivider variant="curve" />
        <Projects />
        <SectionDivider variant="wave" />
        <Skills />
        <SectionDivider variant="slope" />
        <GenAI />
        <Coding />
        <Certifications />
        <Education />
        <Blog />
        <SectionDivider variant="curve" />
        <Contact />
      </motion.main>
      <Footer />
      <OpenChatBot />
      <BackToTopButton />
    </div>
  );
}

export default App;