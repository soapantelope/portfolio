import { Link, NavLink } from "react-router-dom";

export default function App() {
  return (
    <nav className="navigator">
      <ul className="pages">
        <li className="pageContainer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="pageContainer">
          <NavLink to="/games-and-software">Games/Software</NavLink>
        </li>
        <li className="pageContainer">
          <NavLink to="/art-and-3D-models">Art/3D Models</NavLink>
        </li>
        <li className="pageContainer">
          <NavLink to="/academics">Academics</NavLink>
        </li>
        <li className="pageContainer">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
