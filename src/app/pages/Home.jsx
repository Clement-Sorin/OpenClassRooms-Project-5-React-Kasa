import accomodations from "../../datas/accomodations.json"
import background_img from "../../assets/coast-background.webp"
import Banner from "../components/Banner"
import Card from "../components/Card"

function Home() {
    const title = "Chez vous, partout et ailleurs"
    const alt = "fond pour le titre de la page représentant une côte maritime"

    return (
        <div className="wrap-main">
            <Banner
                key="banner-home"
                background_img={background_img}
                title={title}
                alt={alt}
            />
            <section className="gallery">
                {accomodations.map(({ title, pictures, id }) => (
                    <Card key={id} title={title} pictures={pictures} id={id} />
                ))}
            </section>
        </div>
    )
}

export default Home
