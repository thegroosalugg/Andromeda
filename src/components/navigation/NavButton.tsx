import { NavLink } from 'react-router-dom';

export default function NavButton({ path, name }: { path: string; name: string }) {
  return (
    <li>
      <NavLink
        to={path}
        // className={({ isActive }) => (isActive ? 'active' : null)}               // implement you later
        end // prevents root events path navigation from being perpetually active
      >
        {name}
      </NavLink>
    </li>
  );
}
