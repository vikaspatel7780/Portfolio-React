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

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#07080b]/[0.82] shadow-2xl shadow-black/20 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="content-shell flex h-20 items-center justify-between">
        <Link to="home" smooth duration={500} className="group flex cursor-pointer items-center gap-3">
          <img className="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/15" src={logo} alt="Vikas Patel logo" />
          <div>
            <p className="text-base font-black leading-none text-white">Vikas Patel</p>
            <p className="mt-1 text-xs font-semibold text-white/50">Mobile AI Engineer</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ id, label, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={550}
                offset={-82}
                className="cursor-pointer rounded-full px-3.5 py-2 text-sm font-bold text-white/[0.66] transition hover:bg-white/10 hover:text-white"
                activeClass="bg-white/10 text-white"
                spy
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          smooth
          duration={550}
          offset={-82}
          aria-label="Jump to contact"
          className="hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.08] text-white transition hover:border-cyan-200/50 hover:bg-white/[0.14] lg:flex"
        >
          <HiOutlineMail size={22} />
        </Link>

        <button
          type="button"
          onClick={() => setNav((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.08] text-white lg:hidden"
          aria-label={nav ? "Close navigation" : "Open navigation"}
          aria-expanded={nav}
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {nav ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="mx-4 mb-4 rounded-3xl border border-white/10 bg-[#0b0f17]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <ul className="grid gap-1">
              {links.map(({ id, label, link }) => (
                <li key={id}>
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={550}
                    offset={-82}
                    className="block cursor-pointer rounded-2xl px-4 py-3 text-base font-bold text-white/[0.72] transition hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
