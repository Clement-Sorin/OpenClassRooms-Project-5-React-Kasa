import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../../sass/layout/Default.scss"

const Default = () => {
    return (
        <>
            <Header key="header" />
            <main>
                <Outlet key="main" />
            </main>
            <Footer key="footer" />
        </>
    )
}

export default Default
