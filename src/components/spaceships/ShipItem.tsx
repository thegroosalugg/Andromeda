import SpaceShip from '../../models/SpaceShip';

const ShipItem: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return (
    <li>
      <article>
        <h4>{name}</h4>
        <img src={image} alt={name} />
        <p className='ship-info'>{desc}</p>
        <p className='price'>${price}</p>
      </article>
    </li>
  );
};

export default ShipItem;
