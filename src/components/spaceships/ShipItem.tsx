import { useNavigate } from 'react-router-dom';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';

const ShipItem: React.FC<SpaceShip> = ({ id, name, image, desc, price }) => {
  // could also navigate with Link, but this wraps the component a 3rd time and needs additional styling
  const navigate = useNavigate();

  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/ships/${id}`)}
    >
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <p className='ship-info'>{desc}</p>
      <p className='price'>${price}</p>
    </motion.article>
  );
};

export default ShipItem;
