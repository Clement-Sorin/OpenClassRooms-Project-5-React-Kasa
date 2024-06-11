import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/logo-orange.png"

function Header() {
    return (
        <header className="header">
            <Link to={"/"}>
                <img src={logo} alt="logo de kasa" className="header__logo" />
            </Link>
            <nav className="navbar">
                <NavLink
                    to={"/"}
                    className={"navbar__link"}
                    aria-label={`lien vers la page d'accueil de kasa`}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to={"/a-propos"}
                    className={"navbar__link"}
                    aria-label={`lien vers la page à propos de kasa`}
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
