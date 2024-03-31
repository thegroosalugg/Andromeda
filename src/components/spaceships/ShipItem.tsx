import SpaceShip from "../../models/SpaceShip";

const ShipItem: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{desc}</p>
      <p>${price}</p>
    </li>
  );
}

export default ShipItem;
