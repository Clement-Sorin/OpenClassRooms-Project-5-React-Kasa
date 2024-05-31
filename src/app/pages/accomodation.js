import { useParams } from "react-router-dom"
import accomodations from '../../datas/accomodations.json'

function Accomodation() {
    const {id} = useParams()
    const accomodation = accomodations.find((accomodation) => accomodation.id === id)

    return <div>
        <h2>{accomodation.title}</h2>
        <p>{accomodation.description}</p>
    </div>
}

export default Accomodation