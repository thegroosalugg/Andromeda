import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';

const ShipInfo: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return (
    <section className={css['ship-info']}>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{price}</p>
      </div>
    </section>
  );
};

export default ShipInfo;
