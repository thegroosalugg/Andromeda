import { motion } from 'framer-motion';
import tick from '@/assets/tick/tick.png';
import css from './Confirmation.module.css';

export default function Confirmation({ id }: { id: string }) {
  return (
    <>
      <motion.div
        className={css.tick}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1, transition: { delay: 0.5, duration: 0.5 } }}
      >
        <motion.img
          src={tick}
          alt='tick'
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1, type: 'spring', bounce: 0.6 },
          }}
        />
      </motion.div>
      <p className={css.text}>Order {id} confirmed! You can view the details in your user portal.</p>
    </>
  );
}
