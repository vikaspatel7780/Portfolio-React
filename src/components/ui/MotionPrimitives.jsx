/* eslint-disable react/prop-types */
import { motion, useMotionValue, useSpring } from "framer-motion";
import { fadeUp, stagger } from "./animations";

export function Section({ children, className = "", name }) {
  return (
    <motion.section
      name={name}
      id={name?.replace(/\s+/g, "-")}
      className={`section-shell ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-110px" }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const centered = align === "center";

  return (
    <motion.div
      className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
      variants={fadeUp}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </motion.div>
  );
}

export function MagneticButton({ children, className = "", href, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });
  const Component = href ? motion.a : motion.button;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.24);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.24);
  };

  return (
    <Component
      href={href}
      className={`magnetic-button ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function AnimatedCard({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`premium-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
