/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch, FiCode, FiUser, FiBriefcase, FiFolder, FiCpu, FiAward, FiMail, FiDownload, FiGithub, FiLinkedin, FiX } from "react-icons/fi";
import { scroller } from "react-scroll";
import resume from "../../assets/vscoder-resume.pdf";
import { profile } from "../../data/portfolio";

const commands = [
  { id: "about", title: "Go to About Section", category: "Navigation", icon: FiUser, action: () => scroller.scrollTo("about", { smooth: true, duration: 500, offset: -80 }) },
  { id: "experience", title: "Go to Experience Section", category: "Navigation", icon: FiBriefcase, action: () => scroller.scrollTo("experience", { smooth: true, duration: 500, offset: -80 }) },
  { id: "projects", title: "Go to Projects Section", category: "Navigation", icon: FiFolder, action: () => scroller.scrollTo("projects", { smooth: true, duration: 500, offset: -80 }) },
  { id: "skills", title: "Go to Skills Section", category: "Navigation", icon: FiCode, action: () => scroller.scrollTo("skills", { smooth: true, duration: 500, offset: -80 }) },
  { id: "gen-ai", title: "Go to Gen AI Section", category: "Navigation", icon: FiCpu, action: () => scroller.scrollTo("gen-ai", { smooth: true, duration: 500, offset: -80 }) },
  { id: "coding", title: "Go to Coding Profiles", category: "Navigation", icon: FiCode, action: () => scroller.scrollTo("coding profile", { smooth: true, duration: 500, offset: -80 }) },
  { id: "contact", title: "Go to Contact Section", category: "Navigation", icon: FiMail, action: () => scroller.scrollTo("contact", { smooth: true, duration: 500, offset: -80 }) },
  { id: "resume", title: "Download Resume (PDF)", category: "Actions", icon: FiDownload, action: () => window.open(resume, "_blank") },
  { id: "github", title: "Open GitHub Profile", category: "Links", icon: FiGithub, action: () => window.open(profile.github, "_blank") },
  { id: "linkedin", title: "Open LinkedIn Profile", category: "Links", icon: FiLinkedin, action: () => window.open(profile.linkedin, "_blank") },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) || cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-[#0c1017] shadow-2xl backdrop-blur-2xl"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <FiSearch className="text-cyan-300" size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or section name..."
                className="w-full bg-transparent text-sm font-semibold text-white placeholder-white/40 outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={onClose}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white"
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-6 text-center text-xs font-semibold text-white/40">
                  No commands found matching &quot;{query}&quot;
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={() => {
                        cmd.action();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full items-center justify-between rounded-2xl px-3.5 py-3 text-left transition ${
                        isSelected ? "bg-cyan-400/20 text-cyan-200" : "text-white/80 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${isSelected ? "bg-cyan-300/30 text-white" : "bg-white/10 text-white/70"}`}>
                          <Icon size={17} />
                        </div>
                        <div>
                          <p className="text-sm font-bold">{cmd.title}</p>
                          <p className="text-[11px] font-semibold text-white/40">{cmd.category}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-white/30">Jump ↵</span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Hint */}
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] font-semibold text-white/40 bg-black/30">
              <span>Use <kbd className="rounded bg-white/10 px-1 py-0.5 text-white/70">↑</kbd> <kbd className="rounded bg-white/10 px-1 py-0.5 text-white/70">↓</kbd> to navigate</span>
              <span><kbd className="rounded bg-white/10 px-1 py-0.5 text-white/70">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
