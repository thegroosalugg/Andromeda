import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlipProp, IconProp } from '@fortawesome/fontawesome-svg-core';
import css from './BackButton.module.css';

// prettier-ignore
const texts = {
    all: 'Goodbye',
    sun: 'The Sun',
  inner: 'Inner Solar System',
  outer: 'Outer Solar System',
    ast: 'Asteroid Belt',
};

// prettier-ignore
const icons: { [key: string]: IconProp } = {
    all: 'bars-staggered',
    sun: 'sun',
  inner: 'satellite-dish',
  outer: 'user-astronaut',
    ast: 'meteor',
};

export default function BackButton() {
  const { activeFC, activeHandler } = useContext(ExploreContext);

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
      <span />
      <span>
        <FontAwesomeIcon
          icon={icons[activeFC]}
          size='xs'
          beat={activeFC === 'sun'}
          fade={activeFC === 'inner'}
          bounce={activeFC === 'ast'}
        />
        {' ' + texts[activeFC as keyof typeof texts]}
      </span>
      <span>
        {'Back '}
        {/* flip prop is a valid animation. TypeScript is wrong. */}
        <FontAwesomeIcon icon='rocket' flip={true as unknown as FlipProp} />
      </span>
    </motion.button>
  );
}
