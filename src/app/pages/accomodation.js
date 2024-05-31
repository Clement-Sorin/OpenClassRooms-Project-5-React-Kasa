import { useParams } from "react-router-dom"

function Accomodation() {
    const {id} = useParams()

    return <div>
        <h1>Logement {id}</h1>
    </div>
}

export default Accomodation