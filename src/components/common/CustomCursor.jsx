import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Using useSpring hooks makes the movement MUCH smoother than standard state updates
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const circleX = useSpring(0, springConfig);
  const circleY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      circleX.set(clientX - 16); // Offset for 32px wide circle
      circleY.set(clientY - 16);
    };
    
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [circleX, circleY]);

  return (
    <>
      {/* 1. OUTER CIRCLE - High-performance Spring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-ph-yellow rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{
          x: circleX,
          y: circleY,
        }}
      />

      {/* 2. INNER DOT - Zero Delay (Instant) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-ph-yellow rounded-full pointer-events-none z-[9999] will-change-transform"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        // "duration: 0" ensures the dot stays 1:1 with your mouse sensor
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;