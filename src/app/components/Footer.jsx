import logo from "../../assets/logo-white.png"

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="logo de kasa" className="footer__logo" />
            <p className="footer__text">© 2020 Kasa. All right reserved</p>
        </footer>
    )
}

export default Footer
