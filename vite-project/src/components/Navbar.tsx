import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="site-nav">
            <div className="nav-inner">
                <NavLink to="/" className="nav-logo">JapanCommerce</NavLink>

                <ul className="nav-links">
                    <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/home" end className={({isActive}) => isActive ? "active" : ""}>Shop</NavLink></li>
                    <li><NavLink to="/help" end className={({isActive}) => isActive ? "active" : ""}>Help</NavLink></li>
                    <li><NavLink to="/connexion" end className={({isActive}) => isActive ? "active" : ""}>Account</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}