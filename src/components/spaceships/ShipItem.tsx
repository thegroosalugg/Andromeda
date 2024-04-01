import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';

const ShipItem: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return (
    <motion.article whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <p className='ship-info'>{desc}</p>
      <p className='price'>${price}</p>
    </motion.article>
  );
};

export default ShipItem;
