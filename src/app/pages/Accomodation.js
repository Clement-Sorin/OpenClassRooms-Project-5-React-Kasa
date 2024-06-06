import { useParams } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"
import Tag from "../components/Tag"
import Host from "../components/Host"

function Accomodations({accomodations}) {
    const {id} = useParams()
    const accomodation = accomodations.find((accomodation) => accomodation.id === id)
    const equipments = accomodation.equipments

    return <div className="wrap-main">
        <Slideshow 
            key={accomodation.id}
            pictures={accomodation.pictures} 
            title={accomodation.title}
        />
        <section className="details">
            <div className="part-1">
                <div className="part-1__left">
                    <div className="main-title">
                        <h1 className="main-title__title">{accomodation.title}</h1>
                        <h2 className="main-title__location">{accomodation.location}</h2>
                    </div>
                    <Tag tags={accomodation.tags}/>
                </div>
                <div className="part-1__right">
                    <Host accomodation={accomodation} />
                    <Rating 
                        key={accomodation.id}
                        rate={accomodation.rating} 
                    />
                </div>
            </div>
            <div className="part-2">
                <div className="part-2__collapse">
                    <Collapse 
                        key={accomodation.description}
                        title="Description" 
                        content={accomodation.description}
                        classTitle="classHomeTitle" 
                        classContent="classHomeContent"
                    />
                </div>
                <div className="part-2__collapse">
                    <Collapse 
                        key={accomodation.equipment}
                        title="Equipement" 
                        content={equipments.map(equipment =>
                            <ul key={equipment}>
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