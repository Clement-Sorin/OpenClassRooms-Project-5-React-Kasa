import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import logo from "../../assets/logo-orange.png"

function Header() {
    const [activePage, setActivePage] = useState("")
    let classLinkHome = "navbar__link"
    let classLinkAbout = "navbar__link"

    switch (activePage) {
        case "home":
            classLinkHome += " active"
            break
        case "about":
            classLinkAbout += " active"
            break
        default:
            classLinkAbout += ""
            classLinkHome += ""
    }

    return (
        <header className="header">
            <Link to={"/"}>
                <img
                    src={logo}
                    onClick={() => setActivePage("home")}
                    alt="logo de kasa"
                    className="header__logo"
                />
            </Link>
            <nav className="navbar">
                <NavLink
                    to={"/"}
                    onClick={() => setActivePage("home")}
                    className={classLinkHome}
                    aria-label={`lien vers la page d'accueil de kasa`}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to={"/a-propos"}
                    onClick={() => setActivePage("about")}
                    className={classLinkAbout}
                    aria-label={`lien vers la page à propos de kasa`}
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
