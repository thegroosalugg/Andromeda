import SpaceShip from '../../models/SpaceShip';

const ShipItem: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return (
    <li>
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <p className='ship-info'>{desc}</p>
      <p className='price'>${price}</p>
    </li>
  );
};

export default ShipItem;
