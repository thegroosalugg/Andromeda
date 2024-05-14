import { motion } from 'framer-motion';
import css from './Article.module.css';

export default function Article() {
  return (
    <motion.article
      className={css.content}
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      transition={{ type: 'easeIn', duration: 1 }}
    >
      <h3>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'linear', duration: 1, delay: 0.8 }}
        >
          FLY THE COUP
        </motion.span>
      </h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'linear', duration: 1 }}
      >
        {'I am waiting for a bus. '.repeat(25)}
      </motion.p>
    </motion.article>
  );
}
