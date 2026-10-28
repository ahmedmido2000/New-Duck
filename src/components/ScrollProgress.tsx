"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#FF0A2B] via-[#FF4560] to-[#FFB3BE] z-[100] origin-right shadow-[0_0_14px_#FF0A2B]"
      style={{ scaleX }}
    />
  );
}
