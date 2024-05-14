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
        src='spaceman.png'
        alt='spaceman'
        onClick={() => navigate('/')}
        initial={{ rotate: -200, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1, transition: { delay: 1.5, duration: 1 } }}
        whileHover={{ scale: 1.1 }}
      />
      <motion.p
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } }}
      >
        It's time to come back home
      </motion.p>
    </section>
  );
}
