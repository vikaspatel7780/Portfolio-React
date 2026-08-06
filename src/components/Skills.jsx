import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  useAnimation,
} from "framer-motion";
import { skills } from "../data/portfolio";
import { Section, SectionHeader } from "./ui/MotionPrimitives";

const tabs = [
  { icon: "📱", name: "Mobile Development" },
  { icon: "🌐", name: "Frontend" },
  { icon: "⚙️", name: "Backend" },
  { icon: "🤖", name: "Generative AI" },
  { icon: "🛠️", name: "Tools & DevOps" },
];

const ORBIT_DURATION = 30;
const ORBIT_RADIUS_PERCENT = 40;
const RING_RADIUS_PERCENT = 48;

const buildSkillMeta = (title, category, siblings) => {
  const related = siblings
    .filter((s) => s.title !== title)
    .slice(0, 3)
    .map((s) => s.title);

  return {
    description: `Hands-on production experience with ${title}, applied across real-world ${category} builds.`,
    related,
  };
};

const useParticles = (count) =>
  useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      })),
    [count]
  );

const OrbitItem = ({ skill, index, total, rotation, radius, onHover, onLeave, isHovered }) => {
  const angleDeg = (360 / total) * index - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  const left = 50 + radius * Math.cos(angleRad);
  const top = 50 + radius * Math.sin(angleRad);
  const counterRotate = useTransform(rotation, (r) => -r);

  return (
    <>
      <div
        className="absolute h-px origin-left bg-gradient-to-r from-cyan-300/30 to-transparent"
        style={{
          left: "50%",
          top: "50%",
          width: `${radius}%`,
          transform: `rotate(${angleDeg}deg)`,
        }}
      />
      <motion.div
        className="absolute z-10"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div style={{ rotate: counterRotate }}>
          <motion.button
            type="button"
            onHoverStart={() => onHover(skill, index)}
            onHoverEnd={onLeave}
            onFocus={() => onHover(skill, index)}
            onBlur={onLeave}
            whileTap={{ scale: 0.92 }}
            animate={{
              scale: isHovered ? 1.35 : 1,
              boxShadow: isHovered
                ? "0 0 30px rgba(34,211,238,0.65)"
                : "0 0 0px rgba(34,211,238,0)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${
              isHovered
                ? "border-cyan-300/70 bg-cyan-400/20"
                : "border-white/10 bg-white/[0.06] hover:border-cyan-300/40"
            }`}
          >
            {skill.src ? (
              <img
                src={skill.src}
                alt={skill.title}
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />
            ) : (
              <span className="text-[10px] sm:text-xs font-bold text-cyan-200">
                {skill.title}
              </span>
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

const SkillPopup = ({ skill, category }) => {
  if (!skill) return null;
  const meta = skill.meta;

  return (
    <motion.div
      key={skill.id}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 10 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-4"
    >
      <div className="pointer-events-auto w-full max-w-xs rounded-3xl border border-cyan-300/30 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-400/15">
            {skill.src ? (
              <img src={skill.src} alt={skill.title} className="h-6 w-6 object-contain" />
            ) : (
              <span className="text-xs font-bold text-cyan-200">
                {skill.title.substring(0, 2)}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-bold text-white leading-tight">{skill.title}</h4>
            <p className="text-[11px] uppercase tracking-wide text-cyan-300/70">{category}</p>
          </div>
          <span className="ml-auto text-lg font-bold text-cyan-300">{skill.level}%</span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500"
          />
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-300">{meta.description}</p>

        {meta.related.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {meta.related.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const CenterCircle = ({ icon, name, count }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set({ scale: 0.85, opacity: 0 });
    controls.start({ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } });
  }, [name, controls]);

  return (
    <motion.div
      animate={controls}
      style={{ left: "50%", top: "50%", translateX: "-50%", translateY: "-50%" }}
      className="absolute z-20"
    >
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500 p-[2px] shadow-[0_0_60px_rgba(34,211,238,0.35)]"
      >
        <div className="flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-1 rounded-full bg-slate-950/90 backdrop-blur-xl">
          <span className="text-2xl sm:text-3xl">{icon}</span>
          <span className="px-3 text-center text-[11px] sm:text-xs font-bold text-white leading-tight">
            {name}
          </span>
          <span className="text-[10px] text-cyan-300/80">{count} skills</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileCarousel = ({ items, category, hovered, setHovered }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    {items.map((skill) => (
      <motion.button
        key={skill.id}
        type="button"
        onClick={() => setHovered(hovered?.id === skill.id ? null : skill)}
        whileTap={{ scale: 0.96 }}
        className={`w-64 flex-shrink-0 snap-center rounded-3xl border p-5 text-left backdrop-blur-xl transition-colors duration-300 ${
          hovered?.id === skill.id
            ? "border-cyan-300/60 bg-cyan-400/10"
            : "border-white/10 bg-white/[0.05]"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10">
            {skill.src ? (
              <img src={skill.src} alt={skill.title} className="h-6 w-6 object-contain" />
            ) : (
              <span className="text-xs font-bold text-cyan-200">
                {skill.title.substring(0, 2)}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-bold text-white">{skill.title}</h4>
            <p className="text-[11px] text-slate-400">{category}</p>
          </div>
          <span className="ml-auto text-sm font-bold text-cyan-300">{skill.level}%</span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500"
          />
        </div>

        <AnimatePresence>
          {hovered?.id === skill.id && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 text-xs leading-relaxed text-slate-300"
            >
              {skill.meta.description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
    ))}
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const rotation = useMotionValue(0);
  const ringRotation = useTransform(rotation, (r) => -r * 1.4);
  const isPaused = useRef(false);
  const particles = useParticles(14);

  useAnimationFrame((_, delta) => {
    if (isPaused.current) return;
    rotation.set(rotation.get() + (delta * 360) / (ORBIT_DURATION * 1000));
  });

  const activeCategory = skills[activeTab];

  const itemsWithMeta = useMemo(
    () =>
      activeCategory.items.map((item) => ({
        ...item,
        meta: buildSkillMeta(item.title, activeCategory.category, activeCategory.items),
      })),
    [activeCategory]
  );

  const handleHover = useCallback((skill, index) => {
    isPaused.current = true;
    setHoveredSkill(skill);
  }, []);

  const handleLeave = useCallback(() => {
    isPaused.current = false;
    setHoveredSkill(null);
  }, []);

  return (
    <Section name="skills">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A mobile-first stack with full-stack depth."
          description="Technologies I use to build Android, Web, Backend and AI-powered applications."
        />

        {/* <div className="mb-10 sm:mb-14 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.name}
              onClick={() => {
                setActiveTab(index);
                setHoveredSkill(null);
                isPaused.current = false;
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden rounded-full px-5 py-2.5 font-semibold transition-colors duration-300 ${
                activeTab === index
                  ? "text-slate-900"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ zIndex: 0 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.name}
              </span>
            </motion.button>
          ))}
        </div> */}
        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
              key={tab.name}
                type="button"
                onClick={() => {
                setActiveTab(index);
                setHoveredSkill(null);
                isPaused.current = false;
              }}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition duration-300 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-600/80 shadow-lg shadow-cyan-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.name}
              </span>
              </button>
            );
          })}
        </div>
        {/* Desktop / tablet orbit */}
        <div className="relative mx-auto mt-4 h-[320px] w-[320px] sm:block sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-cyan-300/60"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{ y: [0, -12, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}

          <div
            className="absolute rounded-full border border-cyan-300/10"
            style={{
              left: "50%",
              top: "50%",
              width: `${RING_RADIUS_PERCENT * 2}%`,
              height: `${RING_RADIUS_PERCENT * 2}%`,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 40px rgba(34,211,238,0.08)",
            }}
          />
          <motion.div
            className="absolute rounded-full border border-teal-300/10"
            style={{
              left: "50%",
              top: "50%",
              width: `${(RING_RADIUS_PERCENT - 8) * 2}%`,
              height: `${(RING_RADIUS_PERCENT - 8) * 2}%`,
              translateX: "-50%",
              translateY: "-50%",
              rotate: ringRotation,
            }}
          />
          <div
            className="absolute rounded-full border border-dashed border-white/10"
            style={{
              left: "50%",
              top: "50%",
              width: `${ORBIT_RADIUS_PERCENT * 2}%`,
              height: `${ORBIT_RADIUS_PERCENT * 2}%`,
              transform: "translate(-50%, -50%)",
            }}
          />

          <AnimatePresence>
            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 z-[15] rounded-full backdrop-blur-sm"
              />
            )}
          </AnimatePresence>

          <motion.div className="absolute inset-0" style={{ rotate: rotation }}>
            {itemsWithMeta.map((skill, index) => (
              <OrbitItem
                key={skill.id}
                skill={skill}
                index={index}
                total={itemsWithMeta.length}
                rotation={rotation}
                radius={ORBIT_RADIUS_PERCENT}
                onHover={handleHover}
                onLeave={handleLeave}
                isHovered={hoveredSkill?.id === skill.id}
              />
            ))}
          </motion.div>

          <CenterCircle
            icon={tabs[activeTab].icon}
            name={activeCategory.category}
            count={activeCategory.items.length}
          />

          <AnimatePresence>
            {hoveredSkill && (
              <SkillPopup skill={hoveredSkill} category={activeCategory.category} />
            )}
          </AnimatePresence>
        </div>

        {/* Mobile carousel */}
        {/* <div className="sm:hidden">
          <MobileCarousel
            items={itemsWithMeta}
            category={activeCategory.category}
            hovered={hoveredSkill}
            setHovered={setHoveredSkill}
          />
        </div> */}
      </div>
    </Section>
  );
};

export default Skills;