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

import ConstellationCanvas from "./components/ui/ConstellationCanvas";
import SpotlightCursor from "./components/ui/SpotlightCursor";
import SectionDivider from "./components/ui/SectionDivider";
import CommandPalette from "./components/ui/CommandPalette";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07080b]"
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="text-center px-4"
      >
        <motion.div
          className="mx-auto mb-5 h-14 w-14 rounded-2xl border border-white/15 bg-white/10 p-0.5 shadow-[0_0_30px_rgba(94,234,212,0.2)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <p className="eyebrow">Vikas Patel</p>
        <p className="text-sm font-semibold text-white/70">Crafting mobile AI experiences</p>
      </motion.div>
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

function App() {
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
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
        className="relative z-10"
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
      <BackToTopButton />
    </div>
  );
}

export default App;