import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import SpaceShipsList from "../components/spaceships/list/SpaceShipsList"; // outsource later
import { spaceships } from "../assets/spaceships/spaceships" // outsource later

export default function RootLayout() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      {location.pathname.startsWith('/ships') && <SpaceShipsList className='ship-rows' spaceships={spaceships} />}
    </>
  );
}

// have tried to add a dedicated SpaceShip Footer layout via nested routes, however this renders it inside main and it must be rendered below it
// have tried to send it to the current location with a portal, but this also broke <main> flexbox behaviour
// as such it will be rendered here, conditionally. As app grows I will make an Bottom NavBar, like the top and use this
