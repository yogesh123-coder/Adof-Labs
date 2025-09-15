import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimation = ({ children, className = "", delay = 0 }: ScrollAnimationProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50,
        clipPath: "inset(0 0 100% 0)"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        clipPath: "inset(0 0 0% 0)"
      }}
      transition={{ 
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;