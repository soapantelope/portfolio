import { Link, NavLink } from 'react-router-dom'

export default function App() {
    return (
        <nav className="navigator">
            {/* <NavLink to='/' id="navTitle">SOPHIA ZHANG</NavLink> */}
            <ul className="pages">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/games-and-software'>Games/Software</NavLink></li>
                <li><NavLink to='/art-and-3D-models'>Art/3D Models</NavLink></li>
                <li><NavLink to='/academics'>Academics</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>

    )
}