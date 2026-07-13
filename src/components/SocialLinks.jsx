import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/vscoder-resume.pdf";
import { profile } from "../data/portfolio";

const SocialLinks = () => {
  const links = [
    { id: 1, name: "LinkedIn", icon: <FaLinkedin size={22} />, href: profile.linkedin },
    { id: 2, name: "Github", icon: <FaGithub size={22} />, href: profile.github },
    { id: 3, name: "Mail", icon: <HiOutlineMail size={23} />, href: `mailto:${profile.email}` },
    { id: 4, name: "Resume", icon: <BsFillPersonLinesFill size={22} />, href: resume },
    { id: 5, name: "Twitter", icon: <FaTwitter size={22} />, href: profile.twitter },
  ];

  return (
    <div className="content-shell -mt-6 mb-8">
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mx-auto flex w-fit flex-wrap justify-center gap-3 rounded-full border border-white/10 bg-white/[0.055] p-2 backdrop-blur-2xl"
      >
        {links.map(({ id, name, icon, href }) => (
          <li key={id} className="group relative">
            <a
              href={href}
              className="flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {icon}
            </a>
            <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-black opacity-0 shadow-xl transition group-hover:opacity-100">
              {name}
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SocialLinks;
