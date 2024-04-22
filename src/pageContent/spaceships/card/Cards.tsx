import rocket0 from '@/assets/rockets/rocket0.jpg'
import rocket1 from '@/assets/rockets/rocket1.jpg'
import rocket2 from '@/assets/rockets/rocket2.jpg'
import rocket3 from '@/assets/rockets/rocket3.jpg'
import rocket4 from '@/assets/rockets/rocket4.jpg'
import rocket5 from '@/assets/rockets/rocket5.jpg'
import rocket6 from '@/assets/rockets/rocket6.jpg'
import rocket7 from '@/assets/rockets/rocket7.jpg'
import rocket8 from '@/assets/rockets/rocket8.jpg'
import rocket9 from '@/assets/rockets/rocket9.jpg'
import { motion } from 'framer-motion';
import Card from './Card';
import css from './Cards.module.css';


export default function Cards() {
  const cards = [rocket0, rocket1, rocket2, rocket3, rocket4, rocket5, rocket6, rocket7, rocket8, rocket9]

  const CardPair = () => (
    <motion.div
      className={css.pair}
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.3 }}
      viewport={{ once: true }}
    >
      <Card />
      <Card reverse />
    </motion.div>
  );

  return (
    <motion.div
      className={css.cards}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CardPair />
      <CardPair />
    </motion.div>
  );
}
