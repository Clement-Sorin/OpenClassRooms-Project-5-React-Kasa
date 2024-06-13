function Thumb({ title, pictures, id }) {
    return (
        <>
            <a
                href={`/fiche-logement/${id}`}
                className="card"
                aria-label={`fiche du logement ${title}`}
            >
                <img
                    className="card__image"
                    src={pictures[0]}
                    alt={`aperçu de ${title}`}
                />
                <h2 className="card__title">{title}</h2>
            </a>
        </>
    )
}

export default Thumb
