import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/vscoder-resume.pdf";
import { profile } from "../data/portfolio";

const SocialLinks = () => {
  const links = [
    { id: 1, name: "LinkedIn", icon: <FaLinkedin size={20} />, href: profile.linkedin },
    { id: 2, name: "Github", icon: <FaGithub size={20} />, href: profile.github },
    { id: 3, name: "Mail", icon: <HiOutlineMail size={21} />, href: `mailto:${profile.email}` },
    { id: 4, name: "Resume", icon: <BsFillPersonLinesFill size={20} />, href: resume },
    { id: 5, name: "Twitter", icon: <FaTwitter size={20} />, href: profile.twitter },
  ];

  return (
    <div className="content-shell -mt-2 sm:-mt-6 mb-8 px-4">
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mx-auto flex w-fit flex-wrap justify-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/[0.06] p-1.5 sm:p-2 backdrop-blur-2xl shadow-xl"
      >
        {links.map(({ id, name, icon, href }) => (
          <li key={id} className="group relative">
            <a
              href={href}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white/75 transition hover:bg-white/15 hover:text-white active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {icon}
            </a>
            <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-black opacity-0 shadow-xl transition group-hover:opacity-100 hidden sm:block">
              {name}
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SocialLinks;

