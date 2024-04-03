import { useNavigate } from 'react-router-dom';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';
import css from './ShipItem.module.css'

interface ShipItemProps extends SpaceShip {
  className: string;
}

const ShipItem: React.FC<ShipItemProps> = ({ id, model, image, desc, price, className }) => {
  // could also navigate with Link, but this wraps the component a 3rd time and needs additional styling
  const navigate = useNavigate();

  return (
    <motion.article
    className={`${css['ship-item']} ${css[className]}`}
    whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/ships/${id}`)}
    >
      <h4>{model}</h4>
      <img src={image} alt={model} />
      <p className={css['ship-info']}>{desc}</p>
      <p className={css.price}>${price}</p>
    </motion.article>
  );
};

export default ShipItem;
