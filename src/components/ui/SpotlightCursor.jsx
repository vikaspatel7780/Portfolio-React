import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function SpotlightCursor() {
  const [visible, setVisible] = useState(false);
  const cursorX = useSpring(-100, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Only enable spotlight cursor on desktop fine pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      style={{
        background: `radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), rgba(94, 234, 212, 0.07), rgba(96, 165, 250, 0.03) 40%, transparent 80%)`,
      }}
      ref={(node) => {
        if (!node) return;
        const unsubscribeX = cursorX.on("change", (latestX) => {
          node.style.setProperty("--x", `${latestX}px`);
        });
        const unsubscribeY = cursorY.on("change", (latestY) => {
          node.style.setProperty("--y", `${latestY}px`);
        });
        return () => {
          unsubscribeX();
          unsubscribeY();
        };
      }}
    />
  );
}
