import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
        className="text-center"
      >
        <motion.div
          className="mx-auto mb-5 h-14 w-14 rounded-2xl border border-white/15 bg-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <p className="eyebrow">Vikas Patel</p>
        <p className="text-sm font-semibold text-white/70">Crafting mobile AI experiences</p>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell min-h-screen">
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Home />
        <SocialLinks />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GenAI />
        <Coding />
        <Certifications />
        <Education />
        <Blog />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
