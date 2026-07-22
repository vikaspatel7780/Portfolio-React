import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/portfolio";

export default function Footer() {
  const nav = ["about", "experience", "projects", "skills", "gen-ai", "certifications", "blog", "contact"];
  const socials = [
    { href: profile.github, icon: FaGithub, label: "GitHub" },
    { href: profile.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: profile.twitter, icon: FaTwitter, label: "Twitter" },
    { href: `mailto:${profile.email}`, icon: HiOutlineMail, label: "Email" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/40 px-4 py-8 sm:py-12 backdrop-blur-xl">
      <div className="content-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <a href={profile.website} className="text-xl sm:text-2xl font-black text-white hover:text-cyan-300 transition">
              {profile.name}
            </a>
            <p className="mt-2.5 max-w-md text-xs sm:text-sm leading-6 text-white/[0.6]">
              Senior Android, React Native, and Generative AI engineer building polished mobile products.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2.5">
            {nav.map((item) => (
              <a key={item} href={`#${item}`} className="text-xs sm:text-sm font-bold capitalize text-white/[0.6] transition hover:text-cyan-300">
                {item.replace("-", " ")}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="text-xs sm:text-sm text-white/[0.45]">© 2026 {profile.name}. All Rights Reserved.</span>
          <div className="flex gap-2.5">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/[0.7] transition hover:bg-white/[0.14] hover:text-white active:scale-95"
              >
                <Icon size={label === "Email" ? 19 : 18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

