import { useParams } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import "../../sass/pages/Accomodation.scss"

function Accomodations({accomodations}) {
    const {id} = useParams()
    const accomodation = accomodations.find((accomodation) => accomodation.id === id)

    return <div className="wrap-main">
        <Slideshow pictures={accomodation.pictures} />
        <h2>{accomodation.title}</h2>
        <p>{accomodation.description}</p>
    </div>
}

export default Accomodations