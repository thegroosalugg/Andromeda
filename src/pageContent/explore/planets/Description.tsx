import { AnimatePresence, motion } from 'framer-motion';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import { useContext } from 'react';
import { planets } from './planets';
import { Planet } from './Planet';


export default function Description({
  name,
  isActive,
  width,
}: {
      name: Planet;
  isActive: boolean;
     width: number;
}) {
  const { isMobile } = useContext(ExploreContext);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.p
          layout
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: 1,
             scaleY: 1,
            transition: { delay: 1, duration: 0.5, ease: 'easeIn' },
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
          style={{
                  width: width - 40,
                 height: width / 2,
               fontSize: isMobile ? '0.5rem' : '1rem',
            borderWidth: isMobile ? '0.5rem' : '1rem',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y:   0, transition: { delay: 2, duration: 1 } }}
          >
            {planets[name]}
          </motion.span>
        </motion.p>
      )}
    </AnimatePresence>
  );
}
