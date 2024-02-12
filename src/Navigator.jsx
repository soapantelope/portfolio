import { Link, NavLink } from "react-router-dom";

export default function App() {
  return (
    <nav className="navigator">
      <ul className="pages">
        <li className="pageContainer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="pageContainer">
          <NavLink to="/software-games">Software/Games</NavLink>
        </li>
        <li className="pageContainer">
          <NavLink to="/art">Art</NavLink>
        </li>
        <li className="pageContainer">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
