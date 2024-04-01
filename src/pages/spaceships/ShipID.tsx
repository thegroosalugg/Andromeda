import { useParams } from "react-router-dom"
import { spaceships } from "../../assets/spaceships/spaceships";
import ShipInfo from "../../components/spaceships/ShipInfo";

export default function ShipIDPage() {
  const { id } = useParams();
  const spaceship = spaceships.find(spaceship => spaceship.id === id)

  if (!spaceship) {
    throw new Error('No Ship Found')
  }

  return <ShipInfo {...spaceship} />
}
