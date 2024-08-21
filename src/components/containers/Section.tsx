import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import css from './Section.module.css';

export default function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.75, 1], ['0%', '0%', '-100%']);

  return (
    <motion.section
      className={css.section}
      ref={ref}
      style={{ y }}
    >
      {children}
    </motion.section>
  );
}
