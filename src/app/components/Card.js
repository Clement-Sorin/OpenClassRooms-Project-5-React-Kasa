import "../../sass/components/Card.scss"

function Thumb({title, pictures, id}) {
    return <>
            <a href={`/fiche-logement/${id}`} className="card" aria-label={`fiche du logement ${title}`}>
                <img className="card__image" src={pictures[0]} alt={`aperçu de ${title}`} />
                <h3 className="card__title">{title}</h3>
            </a>
        </>
}

export default Thumb