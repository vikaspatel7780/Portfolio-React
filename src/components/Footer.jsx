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
    <footer className="border-t border-white/10 bg-black/35 px-4 py-10 backdrop-blur-xl">
      <div className="content-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href={profile.website} className="text-2xl font-black text-white">
              {profile.name}
            </a>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/[0.54]">
              Senior Android, React Native, and Generative AI engineer building polished mobile products.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {nav.map((item) => (
              <a key={item} href={`#${item}`} className="text-sm font-bold capitalize text-white/[0.54] transition hover:text-white">
                {item.replace("-", " ")}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="text-sm text-white/[0.42]">© 2026 {profile.name}. All Rights Reserved.</span>
          <div className="flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white/[0.62] transition hover:bg-white/[0.12] hover:text-white"
              >
                <Icon size={label === "Email" ? 21 : 20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
