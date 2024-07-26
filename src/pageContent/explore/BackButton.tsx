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
      animate={{ scaleY: 1, opacity: 1, height: 'auto', background: '#ff105f' }}
         exit={{ scaleY: 0, opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ background: '#ffad06', color: '#535151' }}
      onClick={() => activeHandler('all')}
    >
      Fly Back
    </motion.button>
  );
}
