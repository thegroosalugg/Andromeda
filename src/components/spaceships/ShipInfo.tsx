import SpaceShip from '../../models/SpaceShip';

const ShipInfo: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return <main>
    <img src={image} alt={name} />
    <div>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  </main>
};

export default ShipInfo;
