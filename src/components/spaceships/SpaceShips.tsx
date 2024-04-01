import './SpaceShips.css';
import SpaceShip from '../../models/SpaceShip';
import ShipItem from './ShipItem';
import { motion } from 'framer-motion';

export default function SpaceShips({ spaceships }: { spaceships: SpaceShip[] }) {
  return (
    <main className='spaceship'>
      <h1>SPACESHIP CITY</h1>
      <motion.ul
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial='hidden'
        animate='visible'
      >
        {spaceships.map((ship, index) => (
          <motion.li
            key={ship.id}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 1.2 },
            }}
            transition={{ type: 'tween', duration: 0.5, delay: index * 0.1 }}
          >
            <ShipItem {...ship} />
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
