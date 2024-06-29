import { motion } from 'framer-motion';
import css from '../main/UserPortal.module.css';

export default function EmptyList({ type }: { type: string}) {
  // component is already stealing styles from another component, at this point its simpler to add remaining styles via inline
  // styles are set to perfecyly mimic escaping component to ensure no layout transition takes place
  const styles = {
    width: type === 'orders' ? '45rem' : '25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: type === 'orders' ? 0 : '1rem 0',
    color: '#FFFFFF',
    borderTop: type === 'orders' ? 'none' : '',
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
        You have no {type}
      </motion.p>
    </motion.div>
  );
}
