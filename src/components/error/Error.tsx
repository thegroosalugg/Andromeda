import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import css from './Error.module.css';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <section className={css.error}>
      <motion.h2
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      >
        Whoops, you flew too close to the Sun
      </motion.h2>
      <motion.img
        src='/spaceman.png'
        alt='spaceman'
        initial={{ rotate: -200, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1, transition: { delay: 1.5, duration: 1 } }}
        drag
        dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        whileDrag={{ rotate: 360, transition: { type: 'tween', ease: "linear", duration: 2.5, repeat: Infinity } }}
        whileHover={{ scale: 1.1, rotateZ: 25 }}
      />
      <motion.p
        onClick={() => navigate('/')}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } }}
        whileHover={{ color: '#ffffff', scale: 1.2 }}
      >
        It's time to come back home
      </motion.p>
    </section>
  );
}
