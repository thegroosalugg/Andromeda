import { motion } from 'framer-motion';

interface divProps {
  className: string;
  // variants are optional: if div is invisble, providing them does nothing. In this case use staggerChildren
  variants?: {
    hidden:  object;
    visible: object;
  };
  // if you don't provide variants, this should be configured to staggerChildren, but this is also optional
  transition?: object;
  children: React.ReactNode;
}

export default function MotionDiv({
  className,
  variants,
  transition,
  children,
}: divProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
