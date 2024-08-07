import { useScroll, useTransform, motion } from 'framer-motion';
import css from './Section.module.css';
import rangeArray from '@/util/rangeArray';
import useScreenSize from '@/hooks/useScreenSize';

export default function Section({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const { width, height } = useScreenSize();

  const pixels = width > 1024 || width < 320 ? 550 : height;
  const range = rangeArray(4, pixels, 50);

  const opacity = useTransform(scrollY, [...range], [1, 0.8, 0.5, 0]);
  const y = useTransform(scrollY, [...range], ['0%', '-25%', '-50%', '-100%']);

  return (
    <motion.section className={css.section} style={{ opacity, y }}>
      {children}
    </motion.section>
  );
}
