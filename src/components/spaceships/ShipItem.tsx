import SpaceShip from '../../models/SpaceShip';

const ShipItem: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return (
    <li>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p className='ship-info'>{desc}</p>
      <p className='price'>${price}</p>
    </li>
  );
};

export default ShipItem;
