import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import SpaceShipsList from "../components/spaceships/SpaceShipsList";
import { spaceships } from "../assets/spaceships/spaceships";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <SpaceShipsList className='ship-rows' spaceships={spaceships} />
    </>
  );
}
