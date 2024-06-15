import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Error404 from "./Error404"
import accomodations from "../../datas/accomodations.json"
import Slideshow from "../components/Slideshow"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"
import Tag from "../components/Tag"
import Host from "../components/Host"

function Accomodations() {
    const [accomodation, setAccmodation] = useState({
        tags: [],
        equipments: [],
        pictures: [],
        rating: "",
        title: "",
        host: { name: "", picture: "" },
        location: "",
    })

    const { id } = useParams()

    useEffect(() => {
        accomodations.map((unit) => {
            if (unit.id === id) {
                setAccmodation(unit)
            }
        })
    }, [id])

    if (!accomodation.id) {
        return <Error404 />
    }

    const equipments = accomodation.equipments

    return (
        <div className="wrap-main">
            <Slideshow
                key={accomodation.id}
                pictures={accomodation.pictures}
                title={accomodation.title}
            />
            <section className="details">
                <div className="main-info">
                    <div className="main-info__left">
                        <div className="main-title">
                            <h1 className="main-title__title">
                                {accomodation.title}
                            </h1>
                            <h2 className="main-title__location">
                                {accomodation.location}
                            </h2>
                        </div>
                        <Tag tags={accomodation.tags} />
                    </div>
                    <div className="main-info__right">
                        <Host accomodation={accomodation} />
                        <Rating
                            key={accomodation.id}
                            rate={accomodation.rating}
                        />
                    </div>
                </div>
                <div className="secondary-info">
                    <div className="secondary-info__collapse">
                        <Collapse
                            key={accomodation.description}
                            title="Description"
                            content={accomodation.description}
                        />
                    </div>
                    <div className="secondary-info__collapse">
                        <Collapse
                            key={accomodation.equipments}
                            title="Equipement"
                            content={equipments.map((equipment, index) => (
                                <div key={index}>
                                    <span>{equipment}</span>
                                </div>
                            ))}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Accomodations
