import { motion } from 'framer-motion';
import css from './UserPortal.module.css';

export default function NoBookings() {
  // component is already stealing styles from another component, at this point its simpler to add remaining styles via inline
  // styles are set to perfecyly mimic escaping component to ensure no layout transition takes place
  const styles = {
    width: '25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
  };

  return (
    <motion.div
      style={styles}
      className={css.bookings}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
    >
      <motion.p
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1, transition: { delay: 1.5 } }}
      >
        You have no bookings
      </motion.p>
    </motion.div>
  );
}
