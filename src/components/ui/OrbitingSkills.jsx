import { motion } from "framer-motion";
import { SiKotlin, SiReact, SiGoogle, SiRedux, SiNodedotjs, SiAndroid } from "react-icons/si";

const skills = [
  { icon: SiKotlin, label: "Kotlin", color: "text-purple-400", bg: "bg-purple-500/20" },
  { icon: SiAndroid, label: "Android", color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { icon: SiReact, label: "React Native", color: "text-cyan-400", bg: "bg-cyan-500/20" },
  { icon: SiGoogle, label: "Gemma AI", color: "text-amber-300", bg: "bg-amber-500/20" },
  { icon: SiRedux, label: "Redux", color: "text-purple-300", bg: "bg-purple-600/20" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-emerald-300", bg: "bg-emerald-600/20" },
];

export default function OrbitingSkills() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
      {/* Orbital Ring Line */}
      <div className="absolute h-[115%] w-[115%] rounded-full border border-cyan-300/20 shadow-[0_0_40px_rgba(94,234,212,0.1)]" />

      {/* Orbiting Icons */}
      <motion.div
        className="relative h-[115%] w-[115%] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 360;
          const radian = (angle * Math.PI) / 180;
          const radius = 50; // percentage
          const x = 50 + radius * Math.cos(radian);
          const y = 50 + radius * Math.sin(radian);

          const IconComponent = skill.icon;

          return (
            <motion.div
              key={skill.label}
              className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${x}%`, top: `${y}%` }}
              whileHover={{ scale: 1.3 }}
            >
              {/* Icon Container with counter rotation so icon stays upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/20 ${skill.bg} ${skill.color} shadow-lg backdrop-blur-md transition duration-300 group-hover:border-white group-hover:shadow-cyan-400/50`}
              >
                <IconComponent size={20} />
              </motion.div>

              {/* Tooltip */}
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/80 px-2 py-0.5 text-[10px] font-bold text-white opacity-0 shadow-lg transition duration-200 group-hover:opacity-100">
                {skill.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
