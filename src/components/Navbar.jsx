import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/portfolios/logo.png";

const links = [
  { id: 1, label: "About", link: "about" },
  { id: 2, label: "Experience", link: "experience" },
  { id: 3, label: "Projects", link: "projects" },
  { id: 4, label: "Skills", link: "skills" },
  { id: 5, label: "Gen AI", link: "gen-ai" },
  { id: 6, label: "Coding", link: "coding profile" },
  { id: 7, label: "Contact", link: "contact" },
];

const navContainerVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.96,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [nav]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#07080b]/[0.85] shadow-2xl shadow-black/40 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="content-shell flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        <Link to="home" smooth duration={500} className="group flex cursor-pointer items-center gap-3">
          <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl object-cover ring-1 ring-white/20 transition duration-300 group-hover:scale-105 group-hover:ring-cyan-300/50" src={logo} alt="Vikas Patel logo" />
          <div>
            <p className="text-sm sm:text-base font-black leading-none text-white group-hover:text-cyan-200 transition">Vikas Patel</p>
            <p className="mt-1 text-[11px] sm:text-xs font-semibold text-white/50">Mobile AI Engineer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ id, label, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={550}
                offset={-82}
                className="cursor-pointer rounded-full px-3.5 py-2 text-sm font-bold text-white/[0.68] transition hover:bg-white/10 hover:text-white"
                activeClass="bg-white/15 text-white font-extrabold shadow-sm"
                spy
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact CTA */}
        <Link
          to="contact"
          smooth
          duration={550}
          offset={-82}
          aria-label="Jump to contact"
          className="hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.08] text-white transition hover:border-cyan-300/50 hover:bg-white/[0.16] hover:scale-105 lg:flex"
        >
          <HiOutlineMail size={22} />
        </Link>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setNav((open) => !open)}
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.08] text-white transition hover:bg-white/[0.16] active:scale-95 lg:hidden"
          aria-label={nav ? "Close navigation" : "Open navigation"}
          aria-expanded={nav}
        >
          {nav ? <FaTimes size={19} /> : <FaBars size={19} />}
        </button>
      </nav>

      {/* Mobile Backdrop & Drawer */}
      <AnimatePresence>
        {nav ? (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNav(false)}
              className="fixed inset-0 top-[64px] sm:top-[80px] z-40 bg-black/70 backdrop-blur-md lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={navContainerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute left-4 right-4 top-[calc(100%+0.5rem)] z-50 rounded-3xl border border-white/15 bg-[#0b0f17]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <ul className="grid gap-1">
                {links.map(({ id, label, link }) => (
                  <motion.li key={id} variants={navItemVariants}>
                    <Link
                      onClick={() => setNav(false)}
                      to={link}
                      smooth
                      duration={550}
                      offset={-82}
                      className="block cursor-pointer rounded-2xl px-4 py-3 text-base font-bold text-white/[0.78] transition hover:bg-white/10 hover:text-white active:bg-cyan-500/20 active:text-cyan-200"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

