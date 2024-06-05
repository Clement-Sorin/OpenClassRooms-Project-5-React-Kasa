import { useParams } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import "../../sass/pages/Accomodation.scss"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"

function Accomodations({accomodations}) {
    const {id} = useParams()
    const accomodation = accomodations.find((accomodation) => accomodation.id === id)
    const tags = accomodation.tags
    const equipments = accomodation.equipments

    return <div className="wrap-main">
        <Slideshow pictures={accomodation.pictures} title={accomodation.title}/>
        <section className="details">
            <div className="part-1">
                <div className="part-1__left">
                    <div className="main-title">
                        <h1 className="main-title__title">{accomodation.title}</h1>
                        <h2 className="main-title__location">{accomodation.location}</h2>
                    </div>
                    <ul className="tags">
                        {tags.map(tag =>
                            <li className="tags__element">{tag}</li>
                        )}
                    </ul>
                </div>
                <div className="part-1__right">
                    <div className="host">
                        <span className="host__name">{accomodation.host.name}</span>
                        <img className="host__picture" src={accomodation.host.picture} />
                    </div>
                    <Rating />
                </div>
            </div>
            <div className="part-2">
                <div className="part-2__collapse">
                    <Collapse 
                        title="Description" 
                        content={accomodation.description}
                        classTitle="classHomeTitle" 
                        classContent="classHomeContent"
                    />
                </div>
                <div className="part-2__collapse">
                    <Collapse 
                        title="Equipement" 
                        content={equipments.map(equipment =>
                            <ul>
                                <li>{equipment}</li>
                            </ul>
                        )}
                        classTitle="classHomeTitle"
                        classContent="classHomeContent" 
                    />
                </div>
            </div>
        </section>
    </div>
}

export default Accomodations