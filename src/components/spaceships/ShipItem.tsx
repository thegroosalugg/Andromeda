interface SpaceShip {
  name: string;
  image: string;
  desc: string;
  price: number;
}

const SpaceShip: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{desc}</p>
      <p>${price}</p>
    </li>
  );
}

export default SpaceShip;
