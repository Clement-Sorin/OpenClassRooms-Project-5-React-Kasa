import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import background_img from "../../assets/lake_mountain.webp"
import about from "../../datas/about-content.json"

function About() {
    const alt = "paysage de montagne avec un lac"

    return <section className="wrap-main">
        <Banner key={"banner-about"} background_img={background_img} alt= {alt}/>
        <div className="container-collapse">
            {about.map(({title, content}) =>
                <div className="collapse">
                    <Collapse key={title} title={title} content={content} classTitle="classAboutTitle" classContent="classAboutContent" />
                </div>
            )}
        </div>
    </section>
}

export default About