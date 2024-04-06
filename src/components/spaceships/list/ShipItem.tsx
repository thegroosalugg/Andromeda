import { useNavigate } from 'react-router-dom';
import SpaceShip from '../../../models/SpaceShip';
import { motion } from 'framer-motion';
import css from './ShipItem.module.css';
import FontMotion from '../../UI/FontMotion';

interface ShipItemProps extends SpaceShip {
  className: string;
}

const ShipItem: React.FC<ShipItemProps> = ({
  id,
  model,
  image,
  desc,
  price,
  className,
}) => {
  // could also navigate with Link, but this wraps the component a 3rd time and needs additional styling
  const navigate = useNavigate();

  return (
    <motion.article
      className={`${css['ship-item']} ${css[className]}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/ships/${id}`)}
    >
      <h6>{model}</h6>
      <img src={image} alt={model} />
      <p className={css.desc}>{desc}</p>
      <div className={css.price}>
        <FontMotion icon={['fab', 'cc-visa']} />
        <FontMotion icon={['fab', 'cc-mastercard']} />
        <FontMotion icon={['fab', 'cc-paypal']} />
        <FontMotion icon={['fab', 'cc-amazon-pay']} />
        <FontMotion icon={['fab', 'cc-apple-pay']} />
        <p>${price}</p>
      </div>
    </motion.article>
  );
};

export default ShipItem;
