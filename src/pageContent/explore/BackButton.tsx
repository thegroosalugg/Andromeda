import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import css from './BackButton.module.css';

export default function BackButton() {
  const { activeHandler } = useContext(ExploreContext);

  return (
    <motion.button
      className={css.button}
      initial={{ scaleY: 0, opacity: 0, height: 0 }}
      animate={{ scaleY: 1, opacity: 1, height: 'auto' }}
         exit={{ scaleY: 0, opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => activeHandler('all')}
    >
      Fly Back
    </motion.button>
  );
}
